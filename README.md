# Official website for Hirlekar Precision

Hirlekar Precision is a global manufacturer and exporter of magnetically coupled differential pressure gauges. With a wide portfolio of piston and diaphragm instruments, Hirlekar Precision gauges go on diverse applications from filter monitoring, flow measurement, tank level monitoring and many more.

## AWS Deployment instructions

### Install AWS CLI tools

Refer to [AWS CLI website](https://aws.amazon.com/cli/) for instructions. For MacOS, use

```bash
pip install awscli
```

### Setup AWS credentials

Create a credentials file in path `~/.aws/credentials` of the following format

```

[default]
aws_access_key_id = XXXXXXXXXXX
aws_secret_access_key = XXXXXXXXXXXXXXXXXXX
```

The actual key\_id and access\_key can be created with the following [help page](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_CreateAccessKey).

### Navigate to root folder of repository

### Use Jekyll to build and AWS cli to deploy

Run the following command 

```bash
jekyll build --incremental && aws s3 sync _site s3://hirlekarprecision.com --delete
```