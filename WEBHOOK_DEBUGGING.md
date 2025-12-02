# Webhook Debugging Guide

## Issue: CheckoutSession exists but Order not created

This means the checkout was created successfully, but the `checkout.session.completed` webhook event wasn't processed.

## Possible Causes & Solutions

### 1. Webhook Not Configured in Stripe Dashboard

**Check:**
- Go to Stripe Dashboard → Developers → Webhooks
- Verify webhook endpoint is configured: `https://yourdomain.com/api/webhooks/stripe`
- Check if `checkout.session.completed` event is selected

**Solution:**
- Add webhook endpoint in Stripe Dashboard
- Select `checkout.session.completed` event
- Copy the webhook signing secret to `.env` as `STRIPE_WEBHOOK_SECRET`

### 2. Local Development - Webhook Not Received

**For local development, you need Stripe CLI:**

```bash
# Install Stripe CLI
# Then forward webhooks to local server
stripe listen --forward-to localhost:3001/api/webhooks/stripe
```

This will give you a webhook secret starting with `whsec_` - add it to your `.env` file.

### 3. Webhook Secret Mismatch

**Check:**
- Verify `STRIPE_WEBHOOK_SECRET` in `.env` matches the secret from Stripe Dashboard
- For local: Use the secret from `stripe listen` command
- For production: Use the secret from Stripe Dashboard webhook settings

### 4. Payment Not Completed

**Important:** For **subscription mode**, the webhook fires when:
- Customer completes checkout AND
- First payment succeeds

**Check in Stripe Dashboard:**
- Go to Payments → Check the session status
- If payment is pending/failed, webhook won't fire
- For test mode, use test card: `4242 4242 4242 4242`

### 5. Webhook Endpoint Not Accessible

**For production:**
- Webhook endpoint must be publicly accessible (HTTPS)
- Check if your server is running and accessible
- Verify firewall/security settings allow Stripe IPs

### 6. Metadata Missing

**The webhook requires metadata. Check:**
- In checkout route, metadata is being set correctly
- All required fields are in metadata
- Metadata size is under Stripe limits (500 chars per value)

### 7. Database Connection Issues

**Check:**
- MongoDB connection string is correct in `.env`
- MongoDB is running (if local) or accessible (if Atlas)
- Check server logs for MongoDB connection errors

## Debugging Steps

### Step 1: Check Server Logs

Look for these log messages:
- `"Webhook event received:"` - Confirms webhook was received
- `"Processing checkout.session.completed:"` - Confirms event type matched
- `"Order saved successfully:"` - Confirms order was created
- Any error messages

### Step 2: Check Stripe Dashboard

1. Go to **Developers → Webhooks**
2. Click on your webhook endpoint
3. Check **Events** tab - see if `checkout.session.completed` was sent
4. Check delivery status:
   - ✅ Green = Success (200 response)
   - ❌ Red = Failed (check error message)
   - ⏳ Pending = Not yet delivered

### Step 3: Test Webhook Manually (Local Only)

If using Stripe CLI locally:
```bash
# Trigger a test event
stripe trigger checkout.session.completed
```

### Step 4: Verify Environment Variables

Check your `.env` file has:
```env
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
MONGODB_URI=mongodb://...
NEXT_PUBLIC_BASE_URL=http://localhost:3001
```

### Step 5: Check Webhook Response

The webhook should return:
- `200` status for success
- `400` or `500` for errors (Stripe will retry)

## Enhanced Logging Added

The webhook now logs:
1. **Event received** - Type, ID, timestamp
2. **Processing details** - Session ID, payment status, mode
3. **Metadata check** - Whether metadata exists
4. **Database operations** - Order creation success/failure
5. **Errors** - Detailed error messages with context

## Common Issues

### Issue: "No metadata found"
- **Cause:** Metadata not set in checkout session
- **Fix:** Check `app/api/checkout/route.ts` - ensure metadata is being set

### Issue: "Database error"
- **Cause:** MongoDB connection failed or schema validation error
- **Fix:** Check MongoDB connection and Order model schema

### Issue: "Webhook signature verification failed"
- **Cause:** Wrong webhook secret or request not from Stripe
- **Fix:** Verify `STRIPE_WEBHOOK_SECRET` matches Stripe Dashboard

### Issue: Webhook received but order not created
- **Cause:** Error in order creation logic (caught by try-catch)
- **Fix:** Check server logs for specific error message

## Next Steps

1. **Check your server logs** for the enhanced logging messages
2. **Check Stripe Dashboard** webhook delivery logs
3. **Verify environment variables** are set correctly
4. **Test with Stripe CLI** if developing locally
5. **Check MongoDB** connection and ensure database is accessible

## Testing Checklist

- [ ] Webhook endpoint configured in Stripe Dashboard
- [ ] `checkout.session.completed` event selected
- [ ] Webhook secret added to `.env`
- [ ] MongoDB connection working
- [ ] Payment completed successfully
- [ ] Server logs show webhook received
- [ ] Order appears in MongoDB after webhook



