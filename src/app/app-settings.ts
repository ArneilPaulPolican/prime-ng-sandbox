export class AppSettings {
    public APIURLHost = "http://localhost:51111";
    public EasyfisDomain = "http://easyfiswebsite-dectest.azurewebsites.net";
    public UIURLHost = ""
  // Sample change
    // constructor() {
    //     let hostName = window.location.hostname;
    //     this.UIURLHost = hostName;
    //     switch (hostName) {
    //         case 'localhost':
    //             this.APIURLHost = "https://localhost:44388";
    //             break;
    //         case 'dec-ui-test.liteclerk.com':
    //             this.APIURLHost = "https://dec-api-test.liteclerk.com";
    //             break;
    //         default:
    //             break;
    //     }
    // }
}