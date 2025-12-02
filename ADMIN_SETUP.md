# Environment Variables Setup Guide

## Required Environment Variables for Admin Dashboard

Add these variables to your `.env` file:

```env
# Admin Dashboard Authentication
ADMIN_EMAIL="your-admin@email.com"
ADMIN_PASSWORD_HASH="$2a$10$..." # Generated hash (see below)
JWT_SECRET="your-very-long-random-secret-key-change-this"

# Existing variables (MongoDB, Stripe, etc.)
# ... keep your existing variables
```

## Generating Password Hash

To generate a secure bcrypt hash for your admin password:

1. Run the password hash generator script:
```bash
node scripts/generate-password-hash.js YOUR_PASSWORD
```

2. Copy the generated `ADMIN_PASSWORD_HASH` value to your `.env` file

3. Set your `ADMIN_EMAIL` to the email you want to use for login

4. Set `JWT_SECRET` to a long random string (you can generate one online or use a UUID)

## Example

```bash
# Generate hash for password "MySecurePassword123"
node scripts/generate-password-hash.js MySecurePassword123
```

This will output the hash like:
```
ADMIN_PASSWORD_HASH="$2a$10$abcd1234..."
```

Copy that hash to your `.env` file.

## Security Notes

- **Never commit your `.env` file** - It's already in `.gitignore`
- **Use a strong password** - At least 12 characters with letters, numbers, and symbols
- **Change JWT_SECRET** - Use a unique random string for each environment
- The password is stored as a hash, so even with .env access someone cannot see the actual password

## Access the Dashboard

After setting up the environment variables:

1. Restart your development server
2. Go to `/admin/login`
3. Login with your ADMIN_EMAIL and the actual password (not the hash)
4. You'll be redirected to `/admin/dashboard`
