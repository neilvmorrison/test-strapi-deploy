module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "sendgrid",
      providerOptions: {
        apiKey: env("SENDGRID_API_KEY"),
      },
      settings: {
        defaultFrom: "rez@busyninja.ca",
        defaultReplyTo: "rez@busyninja.ca",
        testAddress: "rez@busyninja.ca",
      },
    },
  },
});
