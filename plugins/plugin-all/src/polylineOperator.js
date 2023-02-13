// import { decode } from '@googlemaps/polyline-codec';
import polyline from '@mapbox/polyline';
import { runClass } from '@lowdefy/operators';

function decode(on, options) {
  if (options?.precision) {
    return polyline.decode(on, options.precision);
  }
  return polyline.decode(on);
}

function toGeoJSON(on) {
  return polyline.toGeoJSON(on);
}

// function polyline({ params }) {
//   // const encoded = '_p~iF~ps|U_ulLnnqC_mqNvxq`@';
//   const encoded = String(params);
//   // console.log(decode(encoded, 5));
//   // [
//   //   [38.5, -120.2],
//   //   [40.7, -120.95],
//   //   [43.252, -126.453],
//   // ]

//   // const path = [
//   //   [38.5, -120.2],
//   //   [40.7, -120.95],
//   //   [43.252, -126.453],
//   // ];
//   // console.log(encode(path, 5));
//   // "_p~iF~ps|U_ulLnnqC_mqNvxq`@"
//   return polyline.decode(encoded);
// }

const meta = {
  decode: { namedArgs: ['on', 'options'], validTypes: ['object', 'array'] },
  toGeoJSON: { namedArgs: ['on'], validTypes: ['object', 'array'] },
};

const functions = { decode, toGeoJSON };

function polylineOperator({ params, location, methodName }) {
  return runClass({
    functions,
    location,
    meta,
    methodName,
    operator: '_polyline',
    params,
  });
}

export default polylineOperator;
