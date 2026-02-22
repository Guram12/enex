import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      about_us: "About Us",
      workplaces: "Workplaces",
      facilities: "Facilities",
      contact_us: "Contact Us",
      lang_en: "English",
      lang_ka: "ქართული",
      language_en: "English",
      language_ka: "ქართული",

      work_steps: {
        header: "How We Work — Service Stages",

        step1: {
          title: "Stage I",
          subtitle: "On-site visit and initial assessment",
          item1: "Visual inspection",
          item2: "Defining system types and quantities",
          item3: "Preparation of initial report",
          item3_line1: "– current condition",
          item3_line2: "– faults and defects",
          item3_line3: "– scope of work",
        },

        step2: {
          title: "Stage II",
          subtitle: "Inspection and testing",
          item1: "Detailed system testing",
          item2: "Comparison with projects and standards",
          item3: "Preparation of testing report",
          item3_line1: "– specific test results",
          item3_line2: "– analysis",
          item3_line3: "– list of identified malfunctions",
          item3_line4: "– cost estimate for corrections",
        },

        step3: {
          title: "Stage III",
          subtitle: "Problem elimination",
          item1: "Fixing identified defects",
          item2: "Installation / replacement / correction",
          item3: "Re-testing",
          item4: "Confirmation of proper system operation",
        },

        step4: {
          title: "Stage IV",
          subtitle: "Annual scheduled service",
          item1: "Regular and scheduled system inspections",
          item2: "Functional and technical testing",
          item3: "Execution of planned technical works",
          item3_line1: "– replacement of components and consumables",
          item3_line2: "– according to manufacturer recommendations and technical regulations",
          item4: "Documentation of inspection and testing results",
          item5: "Preparation of technical acts and reports",
        },
      },



    },
  },
  ka: {
    translation: {
      about_us: "ჩვენ შესახებ",
      workplaces: "სამუშაო ადგილები",
      facilities: "სერვისები",
      contact_us: "კონტაქტი",
      lang_en: "English",
      lang_ka: "ქართული",
      language_en: "English",
      language_ka: "ქართული",

      work_steps: {
        header: "როგორ ვმუშაობთ — სერვისის ეტაპები",

        step1: {
          title: "ეტაპი I",
          subtitle: "ადგილზე ვიზიტი და პირველადი შეფასება",
          item1: "ვიზუალური დათვალიერება",
          item2: "სისტემების ტიპების და რაოდენობების განსაზღვრა",
          item3: "პირველადი აქტის შედგენა",
          item3_line1: "– არსებული მდგომარეობა",
          item3_line2: "– ხარვეზები და დეფექტები",
          item3_line3: "– სამუშაოების მოცულობა",
        },

        step2: {
          title: "ეტაპი II",
          subtitle: "შემოწმება და ტესტირება",
          item1: "სისტემების დეტალური ტესტირება",
          item2: "პროექტებთან და სტანდარტებთან შედარება",
          item3: "ტესტირების აქტის შედგენა",
          item3_line1: "– კონკრეტული ტესტების შედეგები",
          item3_line2: "– ანალიზი",
          item3_line3: "– გამოვლენილი გაუმართავობების ჩამონათვალი",
          item3_line4: "– გამოსწორების ღირებულებითი შეფასება",
        },

        step3: {
          title: "ეტაპი III",
          subtitle: "პრობლემების აღმოფხვრა",
          item1: "გამოვლენილი ხარვეზების გამოსწორება",
          item2: "მონტაჟი / ჩანაცვლება / კორექცია",
          item3: "ხელახალი ტესტირება",
          item4: "სისტემის გამართულ მუშაობაზე დადასტურება",
        },

        step4: {
          title: "ეტაპი IV",
          subtitle: "წლიური გეგმიური სერვისი",
          item1: "სისტემების რეგულარულ და გეგმიურ შემოწმებას",
          item2: "ფუნქციონალურ და ტექნიკურ ტესტირებებს",
          item3: "გეგმიური ტექნიკური სამუშაოების შესრულებას",
          item3_line1: "– მაკომპლექტებელი და სახარჯი მასალების შეცვლას",
          item3_line2: "– მწარმოებლის რეკომენდაციებისა და ტექნიკური რეგლამენტის შესაბამისად",
          item4: "შემოწმებისა და ტესტირების შედეგების დოკუმენტირებას",
          item5: "ტექნიკური აქტებისა და ანგარიშების შედგენას",
        },
      },

    },
  },
};

const savedLng =
  typeof window !== "undefined" ? localStorage.getItem("lng") : null;

i18n.use(initReactI18next).init({
  resources,
  lng: savedLng || "ka",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;