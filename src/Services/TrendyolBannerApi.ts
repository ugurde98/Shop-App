export const Banner=async () => {
    var requestOptions:RequestInit = {
        method: 'GET',
        
      };
      
      const response =await fetch("https://public.trendyol.com/discovery-web-recogw-service/api/home-page-summaries?page=2&sectionBeautifiedName=kadin&sectionId=1&pid=YDmicXt3lY&genderTypeId=1&testName=c&mode=0&culture=tr-TR&storefrontId=1&horizontalRightbannerAbTest=B", requestOptions)
      const Banners  =await response.json()
      
      return Banners
}