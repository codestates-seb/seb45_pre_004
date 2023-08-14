import Typography from "./Typography";
import tokens from '../styles/tokens.json'
const globalTokens = tokens.global;

export default {
    title: "Atoms/Typography",
    component: Typography,
    argTypes: {
        color: { control: "color" },
        backgroundColor: { control: "color"},
    }
};

export const TypographyTemplate = (args) => <Typography {...args}/>
TypographyTemplate.args = {
    color: `${globalTokens.blackColor.value}`,
    backgroundColor: 'rgba(0,0,0,0)',
}