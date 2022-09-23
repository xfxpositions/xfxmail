import log from "../logger";

const info = (a: any) => {
  log.info(`DEBUG => ${a}`);
};

const error = (a: any) => {
  log.error(`DEBUG => ${a}`);
};

export { info, error };
