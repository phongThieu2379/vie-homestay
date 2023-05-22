export const headerLocation = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Tên vị trí",
    dataIndex: "tenViTri",
    key: "tenViTri",
  },
  {
    title: "Tỉnh thành",
    dataIndex: "tinhThanh",
    key: "tinhThanh",
  },

  {
    title: "Quốc gia",
    dataIndex: "quocGia",
    key: "quocGia",
  },
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: ( hinhAnh) => {
      return <img width={150} src={hinhAnh} />;
    },
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "action",
  },
];
