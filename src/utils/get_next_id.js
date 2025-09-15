const getNextId = (data) => {
  let id = data.reduce((prev, current) =>
    prev?.id > current.id ? prev.id : current.id
  );

  return id + 1;
};

export { getNextId };
