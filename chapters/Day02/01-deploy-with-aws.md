### List of options for big cloud providers:

-   AWS
-   Google Cloud
-   Microsoft Azure
-   IBM

### Schedule

-   make an AWS account
-   overview of AWS
  - services
  - arns
  - permisions (policies, roles, users, programatic users)
-   overview of S3
- how to apply a policy to a bucket
-   how to upload a website manually through the dashboard
- demonstrate route 53
- talk about cloudfront
- talk about SSL certificates


### How are things named in AWS
With arns (Amazon Resource Names) have the following structure:
```
arn:partition:service:region:account-id:resource-id
```
Example
```
arn:aws:lambda:us-east-1:251256923172:function:my-api-function
```

- [Documentation on AWS ARN format](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html)
- [How S3 Buckets ARNs are formatted](https://docs.aws.amazon.com/en_pv/AmazonS3/latest/dev/s3-arn-format.html)



### How do permissions work with in AWS
By default, nobody can talk to anyone. All services have zero permissions.
It is up to you to allow communication by setting any of these types of permissions:
- user permissions
- role permissions
- policy permissions

### What is a policy
A summary of a policy can be found [here](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json). 

An example policy:
```
{
  "Version": "2012-10-17",
  "Id": "S3-Permissions",
  "Statement": {
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:ListBucket",
    "Resource": "arn:aws:s3:::example_bucket"
  }
}
```

Here is more information on each one of these values:
- [What is the Version?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html)
- [What is the Id?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_id.html)
- [What is a Statement in a policy?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_statement.html)
- [What is an Effect within a statement?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_effect.html)
- [What is a Principle within a statement?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html)
- [What is an Action within a statement?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_action.html)
- [What is a Resource within a statement?](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_resource.html)


#### Policy Summary
- Version means what version of policy are you using
- Id is optional, and is a way for you to give it a customer identifier
- Statement is permission
- Effect can either be Allow or Deny, by default everything is Denied everything
- Principle means who, who is going to be given permissions
- Action means, what can this person/program do?
- Resource is the thing you are allowing a person/program to act on.

#### So what does this policy do?
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::garysjennings-example.com/*"
        }
    ]
}
```


### Users, Groups, and Roles
- [When to use users, groups, and roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html)

### How Route 53 works
- demonstrate route 53

### SSL Certificates
- [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/)
- [Why use SSL Certificates?](https://www.cloudflare.com/learning/ssl/why-use-https/)

### Cloudfront CDN
- [AWS Cloudfront](https://aws.amazon.com/cloudfront/)


