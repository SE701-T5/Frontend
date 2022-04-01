import { Button } from "@mui/material";
import "./index.css";
import PostPreview from "../../components/postPreviewComponent/index";

function Community() {
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
              <p>SOFTENG</p>
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
            <p>
              This is a community for SOFTENG7which is an Adivanced
              SoftwareEngineering Development Methods cuurse.Hooray. if you take
              this course,lave it or rot yous gatta do a project with 20+ people
            </p>
            <p>Naua mai, haere mai kei SOFTENG 7011</p>
          </div>
        </div>

        {(() => {
          let res = [];
          for (let index = 0; index < 10; index++) {
            res.push(
              <div style={{ margin: "20px 0" }} key={index}>
                <PostPreview
                  post={{
                    title: "title",
                    community: "community",
                    upi: "upi",
                    time: "2022-01-01",
                    text: "This is a community for SOFTENG701 which is an Adivanced SoftwareEngineering Development Methods cuurse.Hooray. if you take this course,lave it or rot yous gatta do a project with 20+ people",
                    upvotes: 10,
                    downvotes: 9,
                    images: [
                      // 'https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799'
                    ],
                  }}
                  style={{}}
                ></PostPreview>
              </div>
            );
          }
          return res;
        })()}
      </div>
    </div>
  );
}

export default Community;
