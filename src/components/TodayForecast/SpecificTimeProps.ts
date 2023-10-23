export interface SpecificTimeProps {
  time: Date;
  code: number;
  temp_c: number;
  hide: boolean;
}

export interface SpecificTimeCollection {
  datas: SpecificTimeProps[];
}
