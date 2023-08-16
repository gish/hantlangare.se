#!/bin/bash

set -e

rm -rf dist
npm run build
terraform apply --auto-approve
aws s3 rm s3://hantlangare.se/ --recursive
aws s3 sync dist s3://hantlangare.se/ --exclude "*.map"
CLOUDFRONTID=`aws cloudfront list-distributions --query "DistributionList.Items[?Origins.Items[?Id=='S3-hantlangare.se']].{ID:Id, Origin:Origins.Items[].DomainName}" --no-cli-pager | jq -r '.[0].ID'`
aws cloudfront create-invalidation --distribution-id $CLOUDFRONTID --paths "/*" --no-cli-pager
