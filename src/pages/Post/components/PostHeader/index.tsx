import {
  faCalendar,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { IPost } from "@/pages/Blog";
import { Spinner } from "@/components/Spinner";
import { PostHeaderContainer } from "./styles";
import { ExternalLink } from "@/components/ExternalLink";
import { relativeDateFormatter } from "@/utils/formatter";

interface PostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const formattedDate = relativeDateFormatter(postData?.created_at);

  return (
    <PostHeaderContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <button onClick={goBack} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
              <ExternalLink
                icon={<FontAwesomeIcon icon={faChevronLeft} />}
                text="Voltar"
                variant="iconLeft"
              />
            </button>
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>

          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} comentários
            </li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
}
