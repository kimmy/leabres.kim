import React from "react"
import { fontFace } from "react-emotion";

fontFace`
  font-family: 'Caveat';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/caveat-regular.eot'); /* IE9 Compat Modes */
  src: local('Caveat Regular'), local('Caveat-Regular'),
       url('../fonts/caveat-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/caveat-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/caveat-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/caveat-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/caveat-regular.svg#Caveat') format('svg'); /* Legacy iOS */
`

fontFace`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/lato-regular.eot'); /* IE9 Compat Modes */
  src: local('Lato Regular'), local('Lato-Regular'),
       url('../fonts/lato-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lato-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lato-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lato-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lato-regular.svg#Lato') format('svg'); /* Legacy iOS */
`
