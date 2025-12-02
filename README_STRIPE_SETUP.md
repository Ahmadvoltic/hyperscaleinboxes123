# Stripe Integration Setup Guide

This guide will help you set up Stripe Checkout with webhooks in your Next.js application.

## Prerequisites

- Stripe account (sign up at https://stripe.com)
- Next.js application (already set up)

## Step 1: Get Your Stripe API Keys

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. Go to **Developers** → **API keys**
3. Copy your **Publishable key** and **Secret key**
   - Use test keys for development (start with `pk_test_` and `sk_test_`)
   - Use live keys for production (start with `pk_live_` and `sk_live_`)

## Step 2: Set Up Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Stripe keys to `.env.local`:
   ```env
   STRIPE_SECRET_KEY=sk_test_your_key_here
   STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here
   STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

## Step 3: Set Up Stripe Webhooks

### For Local Development (using Stripe CLI):

1. Install the [Stripe CLI](https://stripe.com/docs/stripe-cli)

2. Login to Stripe:
   ```bash
   stripe login
   ```

3. Forward webhooks to your local server:
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

4. Copy the webhook signing secret (starts with `whsec_`) and add it to your `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

### For Production:

1. Go to **Developers** → **Webhooks** in your Stripe Dashboard
2. Click **Add endpoint**
3. Enter your webhook URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Copy the **Signing secret** and add it to your production environment variables

## Step 4: Test the Integration

1. Start your development server:
   ```bash
   pnpm dev
   ```

2. Go to your order form and complete a test order
3. Use Stripe test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`
   - Any future expiry date and any CVC

4. Check your webhook logs in the Stripe Dashboard or terminal

## Step 5: Handle Webhook Events

The webhook endpoint (`/api/webhooks/stripe`) currently logs events. You should:

1. **Save orders to your database** when `checkout.session.completed` is received
2. **Send confirmation emails** to customers
3. **Process the order** (create email accounts, etc.)
4. **Handle failed payments** appropriately

Example database save (uncomment and implement in `app/api/webhooks/stripe/route.ts`):
```typescript
await saveOrderToDatabase({
  sessionId: session.id,
  customerEmail: session.customer_email,
  amountTotal: session.amount_total,
  metadata: metadata,
  status: 'completed',
  createdAt: new Date(),
});
```

## Security Notes

1. **Never commit `.env.local`** to version control
2. **Always verify webhook signatures** (already implemented)
3. **Don't store sensitive data** (like passwords) in Stripe metadata
4. **Use HTTPS** in production
5. **Validate webhook events** before processing

## Pricing Configuration

Current pricing is set in `app/api/checkout/route.ts`:
- BYOD Package: $10 per domain
- Full Package: $22 per domain

Update these values as needed:
```typescript
const pricePerDomain = formData.packageType === 'byod' ? 10 : 22;
```

## Troubleshooting

### Webhook not receiving events
- Check that your webhook URL is correct
- Verify the webhook secret in your environment variables
- Check Stripe Dashboard → Webhooks for delivery logs

### Checkout session creation fails
- Verify your `STRIPE_SECRET_KEY` is correct
- Check that all required form data is being sent
- Check browser console and server logs for errors

### Payment succeeds but webhook not triggered
- Ensure webhook endpoint is publicly accessible (for production)
- Check webhook endpoint URL in Stripe Dashboard
- Verify webhook secret matches

## Next Steps

1. Set up a database to store orders
2. Implement email notifications
3. Add order management dashboard
4. Set up production Stripe account
5. Configure production webhooks

