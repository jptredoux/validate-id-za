const compose = (...args) => (
  initialValue => (
    args.reduce((accumulator, currentValue) => (
      currentValue(accumulator)
    ), initialValue)
  )
);

export default compose;
