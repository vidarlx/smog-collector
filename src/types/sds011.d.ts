export type Sds011 = {
  esp8266id: string;
  software_version: string;
  sensordatavalues: [
    {
      value_type: string;
      value: string;
    }
  ];
};
