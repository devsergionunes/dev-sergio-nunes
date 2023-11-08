import { Divider } from "antd";
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import * as S from "./styles";

export function ContactFloating() {
  return (
    <S.Container>
      <S.Contet>
        <S.ListSocialMedia>
          <S.ItemSocialMedia>
            <S.LinkSocialMedia
              target="_blank"
              href="https:github.com/devsergionunes"
            >
              <FiGithub />
            </S.LinkSocialMedia>
          </S.ItemSocialMedia>
          <S.ItemSocialMedia>
            <S.LinkSocialMedia
              target="_blank"
              href="https://www.linkedin.com/in/contato-dev-paulo-sergio/"
            >
              <FiLinkedin />
            </S.LinkSocialMedia>
          </S.ItemSocialMedia>
          <S.ItemSocialMedia>
            <S.LinkSocialMedia
              target="_blank"
              href="https://www.instagram.com/devsergionunes"
            >
              <FiInstagram />
            </S.LinkSocialMedia>
          </S.ItemSocialMedia>
        </S.ListSocialMedia>
        <Divider
          type="vertical"
          style={{ height: "70px", borderColor: "#A8B2D1" }}
        />
      </S.Contet>
      <S.Contet>
        <a
          style={{
            color: "#A8B2D1",
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
          href="mailto:devsergionunes@gmail.com"
        >
          devsergionunes@gmail.com
        </a>
        <Divider
          type="vertical"
          style={{ height: "70px", borderColor: "#A8B2D1" }}
        />
      </S.Contet>
    </S.Container>
  );
}
