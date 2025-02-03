export const addBlog = (blog) => {
  return (dispatch) => {
    dispatch({
      type: "addBlog",
      payload: blog,
    });
  };
};
