const load = ({ locals, url }) => {
  const id = parseInt(url.searchParams.get("id"));
  return { id };
};
export {
  load
};
