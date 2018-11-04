import { get, find } from 'lodash';
import { Sds011 } from './types/sds011';
/**
 * Parse a raw payload and transform to a nice format.
 *  
 * @param {Object} Raw payload from a sensor
 * @returns {Object} JSON object { pm10, pm25, timestamp }
 */
const reader = (values: Sds011) => {
  const sensorValue = get(values, 'sensordatavalues');
  if (!sensorValue) {
    return null;
  }
  return {
    pm10: parseFloat(find(sensorValue, { value_type: 'SDS_P1'}).value),
    pm25: parseFloat(find(sensorValue, { value_type: 'SDS_P2'}).value),
    timestamp: new Date().getTime() / 1000
  }
}

export default reader;
