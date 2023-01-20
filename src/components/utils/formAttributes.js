export const form = {
  layout: "horizontal",
  name: "basic",
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  },
  initialValues: {
    remember: true,
  },
  labelAlign: "right",
  size: "small",
  // onFinish={onFinish}
  // onFinishFailed={onFinishFailed}
  autoComplete: "off",
};

export const item = {
  label: "Nombre mascota",
  name: "username",
  // rules: {
  //   // required: false,
  //   message: "Please input your username!",
  // },
};
