import { ThemedButton } from "../ThemedButton";

export const DownloadResumeButton = (): React.ReactElement => {
    return <ThemedButton download href={'/resume/AlexDixon_Resume.pdf'}>Download CV</ThemedButton>;
};
