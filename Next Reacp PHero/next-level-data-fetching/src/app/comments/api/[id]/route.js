export async function PATCH(request, { params }) {
  console.log(params.id);
  const body = await request.json();
  const index = comments.findIndex((c) => c.id === +params.id); //need to conver to number
  comments[index] = {
    id: +params.id,
    text: body.text,
  };
  return Response.json({
    message: "Comment Updated",
    comments,
  });
}
//delete
export async function DELETE(request, { params }) {
  const newComments = comments.filter((c) => c.id !== +params.id);

  return Response.json({
    message: "Comment deleted",
    newComments,
  });
}
const comments = [
  {
    id: 1,
    text: "Comment 1",
  },
  {
    id: 2,
    text: "Comment 2",
  },
  {
    id: 3,
    text: "Comment 3",
  },
];
