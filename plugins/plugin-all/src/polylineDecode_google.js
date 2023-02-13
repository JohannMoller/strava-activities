// import { decode } from '@googlemaps/polyline-codec';
import pkg from '@googlemaps/polyline-codec';
const { decode } = pkg;
function polylineDecode({ params }) {
  // const encoded = '_p~iF~ps|U_ulLnnqC_mqNvxq`@';
  const encoded = String(params);
  // console.log(decode(encoded, 5));
  // [
  //   [38.5, -120.2],
  //   [40.7, -120.95],
  //   [43.252, -126.453],
  // ]

  // const path = [
  //   [38.5, -120.2],
  //   [40.7, -120.95],
  //   [43.252, -126.453],
  // ];
  // console.log(encode(path, 5));
  // "_p~iF~ps|U_ulLnnqC_mqNvxq`@"
  return decode(encoded, 5);
}

export default polylineDecode;
