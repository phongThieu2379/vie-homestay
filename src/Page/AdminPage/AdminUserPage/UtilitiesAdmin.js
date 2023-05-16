export const headerUser = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    render: (gender) => {
      if (gender == true) {
        return "Nam";
      } else {
        return "Nữ";
      }
    },
  },

  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Thao tác",
    key: "thaoTac",
    dataIndex: "action",
  },
];
