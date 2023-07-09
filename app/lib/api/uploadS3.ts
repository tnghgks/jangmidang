import AWS from "aws-sdk";

export const uploadS3 = (file: File, filename: string) => {
  const REGION = process.env.NEXT_PUBLIC_AWS_REGION;
  const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
  const SECRET_ACCESS_KEY_ID = process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY_ID;

  AWS.config.update({
    region: REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY_ID,
  });

  if (file && filename) {
    const upload = new AWS.S3.ManagedUpload({
      params: {
        ACL: "public-read",
        Bucket: "jangmidang",
        Key: `upload/${filename}`,
        Body: file,
      },
    });

    return upload
      .promise()
      .then((result) => result.Location)
      .catch((err) => console.log(err));
  } else {
    return alert("업로드에 실패하였습니다.");
  }
};
