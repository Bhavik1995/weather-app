// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  weatherApiBaseUrl: 'https://open-weather13.p.rapidapi.com/city',
  XRapidAPIHeaderName: 'X-RapidAPI-Host',
  XRapidAPIHeaderValue: 'open-weather13.p.rapidapi.com',
  XRapidAPIKeyHeaderName: 'X-RapidAPI-Key',
  XRapidAPIKeyHeaderValue: '5063d3a949msh3afd2f0c31377e6p1f8be4jsn1608d0397638'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
