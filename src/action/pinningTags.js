const pinningTags = {
  pinList: (list) => ({
    type: 'PIN_LIST',
    list,
  }),
  pinPosition: (position) => ({
    type: 'PIN_POSITION',
    position,
  }),
};

export default pinningTags;
