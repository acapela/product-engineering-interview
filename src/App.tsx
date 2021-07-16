import styled from "styled-components";
import "./App.css";
import emojis from "./emoji.json";
import { toEmoji } from "./utils/unicodeToEmoji";

function App() {
  return (
    <UIEmojiDescriptionList>
      {emojis.map((emoji) => (
        <UIEmojiDescription key={emoji.short_name}>
          <UIEmojiImage>{toEmoji(emoji.unicode)}</UIEmojiImage>
          <UIEmojiName>{emoji.short_name}</UIEmojiName>
        </UIEmojiDescription>
      ))}
    </UIEmojiDescriptionList>
  );
}

const UIEmojiDescriptionList = styled.div`
  width: 100vw;

  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  text-align: center;

  word-wrap: break-word;
`;

const UIEmojiDescription = styled.div`
  width: 56px;
`;

const UIEmojiImage = styled.div`
  font-size: 2rem;
`;

const UIEmojiName = styled.div`
  font-size: 0.75rem;
`;

export default App;
