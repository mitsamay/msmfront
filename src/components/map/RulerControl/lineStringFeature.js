export default function lineStringFeature(coordinates) {
    return {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates
      }
    }
  }
  