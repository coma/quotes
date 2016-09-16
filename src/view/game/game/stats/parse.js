const offset = 60000;

export default ({positions, length}) => {

    const from = Date.now(),
          to   = from - offset;

    const points = positions
        .map((time, position) => ({position, time}))
        .filter(({time}) => time <= from && to <= time)
        .reverse();

    const lines = points
        .map(({position, time}) => `H${ from - time } V${ length - position }`)
        .join(' ');

    const start = points.length ? length - points[0].position : length;

    return {
        viewBox: `0 0 ${ offset } ${ length }`,
        d      : `M0 ${ start } ${ lines } V${ length } H0`
    };
};