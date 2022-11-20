# Week 9: 'Translator' - Using APIs with Auth

## ✅ Today's aims (What we'll do)

- Build a basic translator app (Start to finish)
- Fetch data from APIs requiring Authentication
- Store config variables in .env file
- Use RN's Modal component
- Q&A

## 🔗 Useful Resources (links)

- Translator API Quickstart: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/quickstart-translator?tabs=nodejs
- Translator v3.0 API reference: https://docs.microsoft.com/en-us/azure/cognitive-services/translator/reference/v3-0-reference
- Azure for Students: https://azure.microsoft.com/en-au/free/students/
- react-native-dotenv: https://github.com/goatandsheep/react-native-dotenv
- SafeAreaView: https://reactnative.dev/docs/safeareaview
- Modal: https://reactnative.dev/docs/modal
- Security and secrets in RN:
  - https://reactnative.dev/docs/security
  - https://rammic.github.io/2015/07/28/hiding-secrets-in-android-apps/

## Setting up Azure translation serivce

1. Sign up to azure: https://azure.microsoft.com/en-us/free/students/
2. Create a translator resource from the portal (https://portal.azure.com/#home).
   1. Click '+ Create a resource'
   2. Search 'Translator'
   3. Click 'Create'
   4. Fill out your project details, the following work well:
   - Subscription: `Azure for Students`
   - Resource Group: create new - `translator`
   - Region: `australiaeast`
   - Name: anything
   - Pricing tier: `Free F0`
   5. Click 'Review and Create' and then 'Create'
   6. Once deployment is complete, click 'Go to resource'
   7. From there access the API reference and Keys & Endpoint

## Creating `.env` file

You will need to create a file in the project root with name `.env`. The file should contain the following:

```
API_BASE_URL=https://api.cognitive.microsofttranslator.com
API_REGION=australiaeast
API_KEY=<your-key-here>
```
