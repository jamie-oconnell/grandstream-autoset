const ips = require("./ip_address");
const axios = require("axios").default;

const action = async (ip) => {
  return new Promise(async (resolve) => {
    try {
      axios
        .get(
          `http://${ip}/cgi-bin/api-sys_operation?passcode=NeXT123!&request=REBOOT`
        )
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log("error");
        })
        .then(function () {
          // always executed
        });
      resolve();
    } catch (error) {
      console.log(error);
    }
  });
};

// run loop
(async () => {
  for (const item of ips) {
    await action(item);
  }
})();
