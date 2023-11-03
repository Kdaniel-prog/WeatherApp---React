export interface SpecificTimeProps {
  time: Date;
  code: number;
  temp_c: number;
}

export interface SpecificTimeCollection {
  datas: SpecificTimeProps[];
}
