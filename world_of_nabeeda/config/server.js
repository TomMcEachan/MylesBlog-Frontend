module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8005),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b123a2fdc097227959517b664a37dcec'),
    },
  },
});
