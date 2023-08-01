import AWS from "aws-sdk";

export default class AwsS3{
  private Region;
  private AccessKeyId;
  private SecretAccessKeyId;

  constructor(){
    this.Region= process.env.NEXT_PUBLIC_AWS_REGION;
    this.AccessKeyId= process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID;
    this.SecretAccessKeyId= process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY_ID;
    
    AWS.config.update({
      region: this.Region,
      accessKeyId: this.AccessKeyId,
      secretAccessKey: this.SecretAccessKeyId,
    });
  }

  upload(file: File, filename: string){
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
  }
  async getByPath(path: string){
    const params = {
      Bucket: "jangmidang",
      Prefix: path,
      StartAfter: path,
    };
  
    const s3 = new AWS.S3();
    return await s3
      .listObjectsV2(params)
      .promise() // 메소드를 프로미스 객체화
      .then((data) => data);
  }
}
