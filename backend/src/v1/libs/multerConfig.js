const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");

const s3 = new S3Client({ region: "ap-southeast-1" });

exports.getMulter = () => {
	return multer({
		storage: multerS3({
			s3: s3,
			bucket: "instant-grocer",
			metadata: (req, file, cb) => {
				cb(null, { fieldName: file.fieldname });
			},
			key: (req, file, cb) => {
				cb(null, Date.now().toString());
			},
		}),
		fileFilter: (req, file, cb) => {
			ALLOWED_FILE_FORMATS = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
			if (ALLOWED_FILE_FORMATS.includes(file.mimetype)) {
				cb(null, true);
			} else {
				cb(null, false);
			}
		},
	});
};
