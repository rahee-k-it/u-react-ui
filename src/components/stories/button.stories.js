
import Button from "../Button";

const meta = {
    title: "/components/Button",
    component: Button,
};

export default meta;

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
export const FaceBookBtn = Template.bind({});
export const KakaoBtn = Template.bind({});
export const GithubBtn = Template.bind({});



Default.args = {
    title: "Button",
    bgColor: "",
};

FaceBookBtn.args = {
    title: "FaceBook",
    bgColor: "#1A74E3",
};

KakaoBtn.args = {
    title: "Kakao",
    bgColor: "#F7E10B",
};


GithubBtn.args = {
    title: "Github",
    bgColor: "#2CA44E",
};



