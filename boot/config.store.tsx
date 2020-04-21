import CONTENTSTORE from "../app/store/content.store";
import CATEGORY from "../app/store/category.store";
import ADS from "../app/store/ads.store";
import BOOKMARK from "../app/store/save.store";
import MessagingStore from "../app/store/messaging.store";
import SearchContent from "../app/store/search.store";
import ContactStore from "../app/store/contact.store";
import Advertisement from "../app/store/Advertise";
import VERSIONAPP from "../app/store/environment_store";
import RelatedContent from "../app/store/relatedContent.store";
import BEAUTY from "../app/store/beauty.store";
import LOVE from "../app/store/love.store";
import COMADY from "../app/store/comady.store";
import KEYSTORY from "../app/store/keystory.store";
import PROVERD from "../app/store/proverd.store";
import HEALTH from "../app/store/health.store";


export default function () {
	return {
		content: new CONTENTSTORE(),
		category: new CATEGORY(),
		ads: new ADS(),
		bookmark:new BOOKMARK(),
		messaging: new MessagingStore(),
		searchContent: new SearchContent(),
		contact: new ContactStore(),
		advertiseType: new Advertisement(),
		appVersion:new VERSIONAPP(),
		relatedcontent: new RelatedContent(),
		beauty: new BEAUTY(),
		health: new HEALTH(),
		love : new LOVE(),
		comady: new COMADY(),
		keystory: new KEYSTORY(),
		proverd: new PROVERD(),

	};
}
