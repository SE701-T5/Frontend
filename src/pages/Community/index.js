import { Button } from "@mui/material";
import "./index.css";
import PostPreview from "../../components/postPreviewComponent/index";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useCommunities } from "../../hooks/useCommunities";

function Community() {
  const { id } = useParams();

  const { communities, loading: loadingForCommunities } = useCommunities();

  const community = communities?.find((c) => c.id === id);

  const {
    data: posts,
    error,
    mutate,
    loading,
  } = useApi(`/communities/${id}/posts`, {});

  if (loadingForCommunities) {
    return <>loading</>;
  }

  return (
    <div>
      <div className="container detail-container">
        <div className="detail-card">
          <div
            className="image"
            style={{
              backgroundImage:
                "url(https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799)",
            }}
          >
            <div>
              <p>{community.name}</p>
              <Button variant="filled">Join</Button>
            </div>
          </div>
          <div className="info">
            <div
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>Members: 169</span>
              <span style={{ fontSize: "14px" }}>2022-03-17 14:27:00</span>
            </div>
            <p>{community?.description}</p>
            <p>Naua mai, haere mai kei SOFTENG 7011</p>
          </div>
        </div>
        {posts?.map((p, index) => {
          return (
            <div style={{ margin: "20px 0" }} key={index}>
              <PostPreview post={p} style={{}}></PostPreview>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
