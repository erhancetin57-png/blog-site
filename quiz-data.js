/* =========================================================
   ISTQB Foundation Level - Deneme Sinavi Verileri
   quiz-data.js - 5 sinav x 40 soru
   Her soru: { q: soru metni, options: [A,B,C,D], answer: dogru sikkin index'i (0-3) }
   ========================================================= */

const ISTQB_EXAMS = [
  [
    {
      "q": "Test etme ile hata ayıklama (debugging) arasındaki temel fark nedir?",
      "options": [
        "Test etme kusurları bulur, hata ayıklama bulunan kusurların kök nedenini bulup düzeltir",
        "Hata ayıklama kusurları bulur, test etme düzeltir",
        "İkisi aynı faaliyettir",
        "Test etme yalnızca otomatik yapılır"
      ],
      "answer": 0
    },
    {
      "q": "Aşağıdakilerden hangisi test etmenin genel hedeflerinden biri DEĞİLDİR?",
      "options": [
        "Kusurları bulmak",
        "Yazılımın kalitesi hakkında güven sağlamak",
        "Kaynak kodun çalışma hızını artırmak",
        "Riskleri azaltmak için bilgi sağlamak"
      ],
      "answer": 2
    },
    {
      "q": "\"Test etme kusurların varlığını gösterebilir, yokluğunu kanıtlayamaz\" ifadesi hangi test prensibidir?",
      "options": [
        "Prensip 1 - Test etme kusurların varlığını gösterir",
        "Prensip 4 - Kusur kümelenmesi",
        "Prensip 6 - Bağlama bağlılık",
        "Prensip 7 - Hataların yokluğu yanılgısı"
      ],
      "answer": 0
    },
    {
      "q": "Kapsamlı (exhaustive) test etmenin uygulanamaz olmasının nedeni nedir?",
      "options": [
        "Test ortamı yetersizliği",
        "Girdi ve ön koşul kombinasyonlarının pratikte çok fazla olması",
        "Test araçlarının pahalı olması",
        "Test uzmanı sayısının azlığı"
      ],
      "answer": 1
    },
    {
      "q": "Erken test etmenin (early testing) temel faydası nedir?",
      "options": [
        "Testin maliyetini artırır",
        "Kusurların yaşam döngüsünün erken evrelerinde bulunmasını sağlayıp maliyeti azaltır",
        "Test süresini uzatır",
        "Sadece kod tamamlandıktan sonra uygulanabilir"
      ],
      "answer": 1
    },
    {
      "q": "\"Kusur kümelenmesi\" (defect clustering) prensibi neyi ifade eder?",
      "options": [
        "Kusurlar sistemde rastgele ve eşit dağılır",
        "Az sayıda modül, sistemdeki kusurların büyük kısmını barındırma eğilimindedir",
        "Her modülde eşit sayıda kusur bulunur",
        "Kusurlar yalnızca entegrasyon testinde ortaya çıkar"
      ],
      "answer": 1
    },
    {
      "q": "\"Pestisit paradoksu\" ne anlama gelir?",
      "options": [
        "Aynı testler tekrar tekrar çalıştırıldığında yeni kusur bulma etkisini yitirir",
        "Test araçları zamanla eskir",
        "Kusurlar zamanla kendiliğinden düzelir",
        "Test edenler zamanla daha az hata yapar"
      ],
      "answer": 0
    },
    {
      "q": "Test etme faaliyetlerinin bağlama göre değişmesi hangi prensiple ifade edilir?",
      "options": [
        "Erken test etme",
        "Test etme bağlama bağlıdır",
        "Kusur kümelenmesi",
        "Hataların yokluğu yanılgısı"
      ],
      "answer": 1
    },
    {
      "q": "\"Hataların yokluğu yanılgısı\" (absence-of-errors fallacy) neyi ifade eder?",
      "options": [
        "Kusurları düzeltmek her zaman kullanıcıyı memnun eder",
        "Bulunan tüm kusurlar düzeltilse bile sistem kullanılabilirlik gereksinimlerini karşılamıyorsa yine başarısız olabilir",
        "Kusursuz yazılım geliştirmek mümkün değildir",
        "Test etme her zaman hatasız sonuç üretir"
      ],
      "answer": 1
    },
    {
      "q": "V-modelinde bileşen testi (component testing) hangi geliştirme aşamasına karşılık gelir?",
      "options": [
        "Gereksinim analizi",
        "Bileşen (birim) tasarımı / kodlama",
        "Sistem tasarımı",
        "Kabul testi"
      ],
      "answer": 1
    },
    {
      "q": "Yinelemeli-artımlı yaşam döngüsü modellerinde test etme ile ilgili hangisi doğrudur?",
      "options": [
        "Test etme sadece son iterasyonda yapılır",
        "Her iterasyon kendi test aşamalarını içerir ve erken geri bildirim sağlar",
        "Test etme tamamen atlanır",
        "Sadece kabul testi uygulanır"
      ],
      "answer": 1
    },
    {
      "q": "Aşağıdakilerden hangisi bir test seviyesi DEĞİLDİR?",
      "options": [
        "Bileşen testi",
        "Entegrasyon testi",
        "Regresyon testi",
        "Kabul testi"
      ],
      "answer": 2
    },
    {
      "q": "Kullanıcıların gerçek ortamda ürünü değerlendirdiği kabul testi türü hangisidir?",
      "options": [
        "Alfa testi",
        "Beta testi",
        "Sözleşme kabul testi",
        "Yasal kabul testi"
      ],
      "answer": 1
    },
    {
      "q": "Değişiklikle ilgili (change-related) test türleri hangileridir?",
      "options": [
        "Fonksiyonel ve fonksiyonel olmayan testler",
        "Doğrulama (confirmation) testi ve regresyon testi",
        "Beyaz kutu ve siyah kutu testleri",
        "Statik ve dinamik testler"
      ],
      "answer": 1
    },
    {
      "q": "Bakım testinin (maintenance testing) tetikleyicilerinden biri DEĞİLDİR?",
      "options": [
        "Yazılımın değiştirilmesi (modifikasyon)",
        "Sistemin başka bir ortama taşınması (migrasyon)",
        "Sistemin ilk kez geliştirilmesi",
        "Sistemin emekliye ayrılması (retirement)"
      ],
      "answer": 2
    },
    {
      "q": "Statik test etme ile dinamik test etme arasındaki temel fark nedir?",
      "options": [
        "Statik testte kod çalıştırılmaz, iş ürünleri incelenir",
        "Statik test yalnızca otomasyon araçlarıyla yapılır",
        "Dinamik test kodu hiç çalıştırmaz",
        "İkisi arasında fark yoktur"
      ],
      "answer": 0
    },
    {
      "q": "Aşağıdakilerden hangisi resmi bir gözden geçirme (formal review) türü DEĞİLDİR?",
      "options": [
        "İnceleme (inspection)",
        "Teknik gözden geçirme (technical review)",
        "Gayri resmi göz atma",
        "Yürüyüş (walkthrough)"
      ],
      "answer": 2
    },
    {
      "q": "Gözden geçirme sürecinde \"moderatör\" rolünün görevi nedir?",
      "options": [
        "İş ürününü yazmak",
        "Oturumu yönetmek ve arabuluculuk yapmak",
        "Bulunan kusurları düzeltmek",
        "Test senaryolarını yazmak"
      ],
      "answer": 1
    },
    {
      "q": "Statik testin faydalarından biri nedir?",
      "options": [
        "Kusurları çalışma zamanında bulur",
        "Kusurları dinamik testten önce, erken aşamada tespit etmeyi sağlar",
        "Sadece kod üzerinde uygulanabilir",
        "Otomasyon şart koşar"
      ],
      "answer": 1
    },
    {
      "q": "İnceleme (inspection) sürecinde \"yazman/scribe\" rolü ne yapar?",
      "options": [
        "Toplantıyı yönetir",
        "Bulunan sorunları/kusurları kaydeder",
        "İş ürününü yazar",
        "Yönetim raporlarını hazırlar"
      ],
      "answer": 1
    },
    {
      "q": "Gözden geçirme sürecinin aşamalarından hangisi ilk sırada yer alır?",
      "options": [
        "Bireysel gözden geçirme",
        "Planlama",
        "Gözden geçirme toplantısı",
        "Yeniden çalışma (rework)"
      ],
      "answer": 1
    },
    {
      "q": "Eşdeğerlik sınıfı (equivalence partitioning) tekniğinin amacı nedir?",
      "options": [
        "Girdi/çıktı alanını eşdeğer bölümlere ayırıp her bölümden bir temsilci test etmek",
        "Sadece sınır değerleri test etmek",
        "Kod satırlarının tamamını çalıştırmak",
        "Karar tablosu oluşturmak"
      ],
      "answer": 0
    },
    {
      "q": "Sınır değer analizi (boundary value analysis) hangi kusurları bulmada özellikle etkilidir?",
      "options": [
        "Sınırlarda ortaya çıkan kusurları",
        "Kod stili hatalarını",
        "Arayüz renk hatalarını",
        "Performans kusurlarını"
      ],
      "answer": 0
    },
    {
      "q": "Karar tablosu testi (decision table testing) hangi durumda özellikle uygundur?",
      "options": [
        "Farklı girdi kombinasyonlarının farklı sonuçlar ürettiği iş kurallarını test etmek için",
        "Sadece tek bir girdi değişkeni olduğunda",
        "Grafik arayüz testinde",
        "Performans testinde"
      ],
      "answer": 0
    },
    {
      "q": "Durum geçiş testi (state transition testing) hangi tür sistemler için uygundur?",
      "options": [
        "Farklı durumlar arasında geçiş yapan, olaylara dayalı sistemler için",
        "Sadece veritabanı sistemleri için",
        "Sadece statik web siteleri için",
        "Sadece raporlama sistemleri için"
      ],
      "answer": 0
    },
    {
      "q": "Kullanım örneği (use case) testinin temel amacı nedir?",
      "options": [
        "Kullanıcı ile sistem arasındaki etkileşim senaryolarını test etmek",
        "Kaynak kod satırlarını kapsamak",
        "Karar noktalarını test etmek",
        "Sınır değerlerini bulmak"
      ],
      "answer": 0
    },
    {
      "q": "Beyaz kutu tekniklerinden \"ifade kapsamı (statement coverage)\" neyi ölçer?",
      "options": [
        "Kod içindeki çalıştırılan ifadelerin yüzdesini",
        "Karar noktalarının kapsamını",
        "Kullanıcı gereksinimlerinin kapsamını",
        "Test senaryolarının sayısını"
      ],
      "answer": 0
    },
    {
      "q": "\"Karar kapsamı (decision coverage)\" ile ifade kapsamı arasındaki ilişki nedir?",
      "options": [
        "Karar kapsamı her zaman ifade kapsamından zayıftır",
        "%100 karar kapsamı, %100 ifade kapsamını garanti eder",
        "İkisi arasında hiçbir ilişki yoktur",
        "İfade kapsamı her zaman karar kapsamından yüksektir"
      ],
      "answer": 1
    },
    {
      "q": "Deneyime dayalı teknik olan \"hata tahmini (error guessing)\" neye dayanır?",
      "options": [
        "Test uzmanının geçmiş deneyimine ve olası hata türlerine ilişkin bilgisine",
        "Otomatik kod analiz araçlarına",
        "Karar tablolarına",
        "Sınır değer analizine"
      ],
      "answer": 0
    },
    {
      "q": "Keşifsel test (exploratory testing) yaklaşımının temel özelliği nedir?",
      "options": [
        "Test tasarımı, yürütme ve öğrenmenin eş zamanlı gerçekleşmesi",
        "Önceden tamamen yazılmış senaryoların uygulanması",
        "Sadece otomasyon araçlarıyla yapılması",
        "Sadece kabul testinde kullanılması"
      ],
      "answer": 0
    },
    {
      "q": "Kontrol listesi tabanlı test (checklist-based testing) hangi amaçla kullanılır?",
      "options": [
        "Test uzmanının deneyimine dayalı bir listeye göre alanları kontrol etmesi için",
        "Kod kapsamını ölçmek için",
        "Performans ölçümü yapmak için",
        "Sadece güvenlik testinde kullanılır"
      ],
      "answer": 0
    },
    {
      "q": "Siyah kutu test tekniklerinin ortak özelliği nedir?",
      "options": [
        "İç yapıya bakmadan, gereksinimler temel alınarak test tasarlanması",
        "Kod satırlarının incelenmesi",
        "Sadece performans ölçümü yapılması",
        "Test edenlerin geliştirici olması gerekliliği"
      ],
      "answer": 0
    },
    {
      "q": "Bağımsız test etmenin (independent testing) faydalarından biri nedir?",
      "options": [
        "Geliştiricinin göremediği farklı türde kusurları bulma olasılığının artması",
        "Test maliyetinin artması",
        "Test sürecinin yavaşlaması",
        "İletişim eksikliğinin artması"
      ],
      "answer": 0
    },
    {
      "q": "Risk tabanlı test etmede (risk-based testing) önceliklendirme neye göre yapılır?",
      "options": [
        "Sadece maliyete göre",
        "Ürün risklerinin olasılığı ve etkisine göre",
        "Sadece zaman kısıtlarına göre",
        "Test uzmanının kişisel tercihine göre"
      ],
      "answer": 1
    },
    {
      "q": "Test planı (test plan) genellikle neleri içerir?",
      "options": [
        "Sadece test senaryolarını",
        "Kapsam, yaklaşım, kaynaklar, zaman çizelgesi, giriş/çıkış kriterleri gibi unsurları",
        "Sadece kusur raporlarını",
        "Sadece kod inceleme sonuçlarını"
      ],
      "answer": 1
    },
    {
      "q": "Bir kusur raporunda (defect report) genellikle bulunması gereken bilgilerden biri DEĞİLDİR?",
      "options": [
        "Kusurun nasıl tekrar oluşturulacağı (adımlar)",
        "Beklenen ve gerçekleşen sonuç",
        "Geliştiricinin özlük bilgileri",
        "Kusurun önem/öncelik derecesi"
      ],
      "answer": 2
    },
    {
      "q": "Giriş kriterleri (entry criteria) neyi tanımlar?",
      "options": [
        "Bir test faaliyetinin başlayabilmesi için karşılanması gereken ön koşulları",
        "Testin ne zaman sona ereceğini",
        "Test raporunun formatını",
        "Kusurların önceliğini"
      ],
      "answer": 0
    },
    {
      "q": "Yapılandırma yönetimi (configuration management) test etmeye nasıl katkı sağlar?",
      "options": [
        "Test iş ürünlerinin benzersiz tanımlanmasını, versiyon kontrolünü ve izlenebilirliğini sağlar",
        "Sadece kusur sayısını azaltır",
        "Test senaryolarını otomatik oluşturur",
        "Sadece performans testinde kullanılır"
      ],
      "answer": 0
    },
    {
      "q": "Test yönetim araçlarının (test management tools) temel işlevi nedir?",
      "options": [
        "Test faaliyetlerinin, kaynakların ve sonuçların yönetimini ve izlenmesini desteklemek",
        "Sadece kod yazmak",
        "Sadece performans ölçümü yapmak",
        "Sadece kullanıcı arayüzü tasarlamak"
      ],
      "answer": 0
    },
    {
      "q": "Test otomasyonunun risklerinden biri nedir?",
      "options": [
        "Otomasyon araçlarından gerçekçi olmayan beklentiler oluşması ve bakım maliyetinin göz ardı edilmesi",
        "Testlerin asla çalışmaması",
        "Manuel testin tamamen ortadan kalkması gerektiği",
        "Kusur sayısının otomatik olarak sıfıra inmesi"
      ],
      "answer": 0
    }
  ],
  [
    {
      "q": "Yazılım test etmenin temel amaçlarından biri aşağıdakilerden hangisidir?",
      "options": [
        "Gereksinimlerin karşılandığına dair kanıt/bilgi sağlamak",
        "Yazılımın satış rakamlarını artırmak",
        "Geliştirme ekibinin iş yükünü azaltmak",
        "Kodun her zaman hatasız olduğunu kanıtlamak"
      ],
      "answer": 0
    },
    {
      "q": "Kalite güvence (QA) ile kalite kontrol (QC) arasındaki fark nedir?",
      "options": [
        "QA sürece odaklanır, QC ürüne/çıktıya odaklanır",
        "QA ve QC aynı şeydir",
        "QC sürece, QA ürüne odaklanır",
        "QA sadece test etme sürecidir"
      ],
      "answer": 0
    },
    {
      "q": "\"Test etme bağlama bağlıdır\" prensibi ne anlama gelir?",
      "options": [
        "Her sistem için aynı test yaklaşımı uygulanmalıdır",
        "Test etme, sistemin türüne ve bağlamına göre farklılaşmalıdır",
        "Test etme sadece belirli sektörlerde uygulanır",
        "Bağlam test sonuçlarını etkilemez"
      ],
      "answer": 1
    },
    {
      "q": "Hata (error), kusur (defect) ve arıza (failure) kavramları arasındaki ilişki nedir?",
      "options": [
        "Bir insan hatası (error) kusura (defect) yol açabilir, kusur da çalışma sırasında arızaya (failure) neden olabilir",
        "Arıza her zaman kusurdan önce gelir",
        "Hata ve kusur aynı anlama gelir",
        "Arıza olmadan kusur oluşamaz"
      ],
      "answer": 0
    },
    {
      "q": "Test edilebilirlik (testability) neyi ifade eder?",
      "options": [
        "Bir bileşenin veya sistemin test edilme kolaylığının derecesini",
        "Testin süresini",
        "Test araçlarının maliyetini",
        "Test uzmanlarının sayısını"
      ],
      "answer": 0
    },
    {
      "q": "ISTQB Etik Kuralları'na göre test uzmanının kamuya karşı sorumluluğu nedir?",
      "options": [
        "Kamu güvenliğini, gizliliğini ve genel iyiliğini gözetmek",
        "Sadece işvereninin çıkarlarını korumak",
        "Sadece kendi kariyerini geliştirmek",
        "Sadece geliştiricilerin talimatlarını uygulamak"
      ],
      "answer": 0
    },
    {
      "q": "Test yaklaşımının seçiminde bağlam faktörlerinden biri DEĞİLDİR?",
      "options": [
        "Ürünün riskleri",
        "Yasal ve düzenleyici gereksinimler",
        "Test edenin favori rengi",
        "Kullanılabilir kaynaklar ve zaman"
      ],
      "answer": 2
    },
    {
      "q": "Test oracle (test kıyaslama kaynağı) kavramı neyi ifade eder?",
      "options": [
        "Beklenen sonuçları belirlemek için kullanılan kaynağı (gereksinimler, spesifikasyonlar vb.)",
        "Test edilen yazılımın kendisini",
        "Test yönetim aracını",
        "Test uzmanının deneyimini"
      ],
      "answer": 0
    },
    {
      "q": "Yazılım geliştirme yaşam döngüsü modeli ile test seviyeleri arasındaki ilişki nasıldır?",
      "options": [
        "Kullanılan yaşam döngüsü modeli, test seviyelerinin nasıl uyarlanacağını etkiler",
        "Yaşam döngüsü modeli test seviyelerini hiç etkilemez",
        "Test seviyeleri sadece Scrum'da bulunur",
        "Yaşam döngüsü modeli sadece kabul testini etkiler"
      ],
      "answer": 0
    },
    {
      "q": "Entegrasyon testinin (integration testing) temel amacı nedir?",
      "options": [
        "Bileşenler veya sistemler arasındaki arayüzleri ve etkileşimleri test etmek",
        "Tek bir bileşenin iç mantığını test etmek",
        "Kullanıcı kabulünü test etmek",
        "Yalnızca performansı ölçmek"
      ],
      "answer": 0
    },
    {
      "q": "Sistem testinin (system testing) kapsamı nedir?",
      "options": [
        "Bütün olarak sistemin uçtan uca davranışının, fonksiyonel ve fonksiyonel olmayan özelliklerin test edilmesi",
        "Sadece tek bir modülün test edilmesi",
        "Sadece kod satırlarının test edilmesi",
        "Sadece kullanıcı arayüzü renklerinin test edilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Fonksiyonel olmayan test türlerine (non-functional testing) örnek hangisidir?",
      "options": [
        "Performans testi, kullanılabilirlik testi, güvenlik testi",
        "Birim testi, entegrasyon testi",
        "Regresyon testi, doğrulama testi",
        "Karar tablosu testi"
      ],
      "answer": 0
    },
    {
      "q": "Beyaz kutu test türü aşağıdakilerden hangisidir?",
      "options": [
        "Yapısal test (kodun iç yapısına dayalı test)",
        "Kullanıcı kabul testi",
        "İş kuralı testi",
        "Güvenlik testi"
      ],
      "answer": 0
    },
    {
      "q": "Doğrulama testi (confirmation/re-test) neyi amaçlar?",
      "options": [
        "Önceden bulunan bir kusurun düzeltmeden sonra giderildiğini doğrulamak",
        "Yeni bir özelliği ilk kez test etmek",
        "Sistemin tamamını yeniden test etmek",
        "Kullanıcı arayüzünü test etmek"
      ],
      "answer": 0
    },
    {
      "q": "Regresyon testi ne zaman uygulanır?",
      "options": [
        "Yazılımda bir değişiklik yapıldığında, değişikliğin başka yerlerde yan etkiye neden olmadığını doğrulamak için",
        "Sadece proje başında",
        "Sadece kabul testi aşamasında",
        "Sadece performans testi sırasında"
      ],
      "answer": 0
    },
    {
      "q": "Statik testin dinamik teste göre avantajı nedir?",
      "options": [
        "Kod çalıştırılmadan erken aşamada kusurların tespit edilebilmesi",
        "Sadece otomatik araçlarla yapılabilmesi",
        "Daha fazla zaman gerektirmesi",
        "Sadece deneyimli test uzmanlarınca yapılabilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Yürüyüş (walkthrough) gözden geçirme türünün özelliği nedir?",
      "options": [
        "Yazarın iş ürününü sunduğu, nispeten gayri resmi bir gözden geçirme türüdür",
        "En resmi gözden geçirme türüdür",
        "Sadece otomatik araçlarla yapılır",
        "Moderatör gerektirmez ve hiçbir zaman not tutulmaz"
      ],
      "answer": 0
    },
    {
      "q": "Teknik gözden geçirme (technical review) kimler tarafından yapılır?",
      "options": [
        "Teknik uzmanlar (örn. mimarlar, geliştiriciler) tarafından, teknik kararları değerlendirmek için",
        "Sadece proje yöneticisi tarafından",
        "Sadece son kullanıcılar tarafından",
        "Sadece test uzmanı tarafından"
      ],
      "answer": 0
    },
    {
      "q": "Bir gözden geçirmede \"yönetici\" rolünün görevi nedir?",
      "options": [
        "Gözden geçirme için zaman ve kaynak tahsis etmek, sürecin işlemesini sağlamak",
        "Kusurları kaydetmek",
        "İş ürününü yazmak",
        "Toplantıyı bizzat yönetmek (moderatörlük)"
      ],
      "answer": 0
    },
    {
      "q": "Statik analiz araçlarının tespit edebileceği kusur türü hangisidir?",
      "options": [
        "Kullanılmayan değişkenler, kod standardı ihlalleri gibi statik kusurlar",
        "Kullanıcı deneyimi ile ilgili öznel sorunlar",
        "Performans darboğazlarının kesin nedenleri",
        "İş gereksinimi eksiklikleri"
      ],
      "answer": 0
    },
    {
      "q": "Eşdeğerlik sınıflarının belirlenmesinde geçerli ve geçersiz sınıflar nasıl ele alınır?",
      "options": [
        "Hem geçerli hem geçersiz eşdeğerlik sınıfları belirlenip her birinden en az bir test senaryosu tasarlanır",
        "Sadece geçerli sınıflar test edilir",
        "Sadece geçersiz sınıflar test edilir",
        "Sınıflar test tasarımında dikkate alınmaz"
      ],
      "answer": 0
    },
    {
      "q": "Bir aralık [1,100] için sınır değer analizi yapılırken hangi değerler öncelikli olarak test edilir?",
      "options": [
        "0, 1, 2, 99, 100, 101 gibi sınıra yakın değerler",
        "Sadece 50 gibi orta değer",
        "Sadece negatif değerler",
        "Sadece 1000 gibi çok büyük değerler"
      ],
      "answer": 0
    },
    {
      "q": "Karar tablosunda \"koşullar\" ve \"eylemler\" ne ifade eder?",
      "options": [
        "Koşullar girdi durumlarını, eylemler ise bu koşullara bağlı çıktı/sonuçları temsil eder",
        "Koşullar sadece test araçlarını ifade eder",
        "Eylemler sadece kod satırlarını ifade eder",
        "İkisi de aynı şeyi ifade eder"
      ],
      "answer": 0
    },
    {
      "q": "Durum geçiş diyagramında \"geçersiz geçiş\" (invalid transition) nedir?",
      "options": [
        "Belirli bir durumda izin verilmeyen bir olayın tetiklenmesi",
        "Sistemin başlangıç durumu",
        "Her zaman geçerli olan bir geçiş",
        "Sadece hata mesajı olmayan geçiş"
      ],
      "answer": 0
    },
    {
      "q": "Kullanım örneği testinde \"ana senaryo (main/basic flow)\" ile \"alternatif akış\" arasındaki fark nedir?",
      "options": [
        "Ana senaryo normal/beklenen yolu, alternatif akış istisnai veya farklı yolları temsil eder",
        "İkisi aynı şeydir",
        "Alternatif akış her zaman hata durumunu ifade eder",
        "Ana senaryo sadece hata durumlarını içerir"
      ],
      "answer": 0
    },
    {
      "q": "%100 ifade kapsamına (statement coverage) ulaşmak için ne yapılmalıdır?",
      "options": [
        "Koddaki her ifadenin en az bir kez çalıştırılması sağlanmalıdır",
        "Her karar noktasının hem doğru hem yanlış sonucu test edilmelidir",
        "Sadece ana fonksiyon test edilmelidir",
        "Kullanıcı arayüzü test edilmelidir"
      ],
      "answer": 0
    },
    {
      "q": "%100 karar kapsamına (decision coverage) ulaşmak için ne gereklidir?",
      "options": [
        "Her kararın hem doğru hem yanlış sonucunun en az bir kez test edilmesi",
        "Sadece ifadelerin çalıştırılması",
        "Sadece döngülerin test edilmesi",
        "Kullanıcı arayüzünün test edilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Deneyime dayalı test tekniklerinin geleneksel tekniklere göre avantajı nedir?",
      "options": [
        "Resmi test tasarım teknikleriyle gözden kaçabilecek kusurları, tecrübeye dayanarak hızlıca bulabilmesi",
        "Her zaman daha az zaman alması garanti değildir ama tecrübeye dayalı içgörü sağlar",
        "Tamamen otomatik olması",
        "Dokümantasyon gerektirmemesi her zaman avantajdır"
      ],
      "answer": 0
    },
    {
      "q": "Keşifsel testte \"oturum tabanlı test yönetimi\" (session-based test management) nedir?",
      "options": [
        "Keşifsel test faaliyetlerinin zaman kutulu oturumlar halinde planlanıp yönetilmesi",
        "Sadece otomatik test senaryolarının çalıştırılması",
        "Sadece regresyon testlerinin yönetilmesi",
        "Test raporlarının silinmesi"
      ],
      "answer": 0
    },
    {
      "q": "Test tekniklerinin sınıflandırılmasında hangi üç kategori bulunur?",
      "options": [
        "Siyah kutu, beyaz kutu ve deneyime dayalı teknikler",
        "Statik, dinamik ve otomatik teknikler",
        "Fonksiyonel, yapısal ve performans teknikleri",
        "Manuel, otomatik ve karma teknikler"
      ],
      "answer": 0
    },
    {
      "q": "Bir test yöneticisinin (test manager) temel görevlerinden biri nedir?",
      "options": [
        "Test stratejisini/planını oluşturmak ve test faaliyetlerini koordine etmek",
        "Sadece kod yazmak",
        "Sadece kullanıcı arayüzü tasarlamak",
        "Sadece kusurları düzeltmek"
      ],
      "answer": 0
    },
    {
      "q": "Ürün riski (product risk) ile proje riski (project risk) arasındaki fark nedir?",
      "options": [
        "Ürün riski, ürünün kalitesiyle ilgiliyken proje riski projenin hedeflerine ulaşmasıyla ilgilidir",
        "İkisi aynı anlama gelir",
        "Ürün riski sadece bütçeyle ilgilidir",
        "Proje riski sadece kullanıcı memnuniyetiyle ilgilidir"
      ],
      "answer": 0
    },
    {
      "q": "Test durumu raporlarında (test progress report) genellikle hangi bilgi yer alır?",
      "options": [
        "Planlanan ve gerçekleşen test ilerlemesi, bulunan/çözülen kusur sayıları gibi metrikler",
        "Sadece kaynak kodun satır sayısı",
        "Sadece geliştiricilerin isimleri",
        "Sadece toplantı tarihleri"
      ],
      "answer": 0
    },
    {
      "q": "Test tamamlama raporu (test summary report) ne zaman hazırlanır?",
      "options": [
        "Bir test faaliyeti veya seviyesi tamamlandığında, sonuçları özetlemek için",
        "Sadece proje başlarken",
        "Sadece kod yazılırken",
        "Sadece gözden geçirme sırasında"
      ],
      "answer": 0
    },
    {
      "q": "Test tahmini (test estimation) için kullanılan yaklaşımlardan biri nedir?",
      "options": [
        "Metrik tabanlı (geçmiş projelerden veri kullanarak) yaklaşım",
        "Sadece tahmin yapmamak",
        "Sadece rastgele sayı seçmek",
        "Sadece bütçeyi tahmin etmek"
      ],
      "answer": 0
    },
    {
      "q": "Test kapsamının izlenmesinde kullanılan bir metrik hangisidir?",
      "options": [
        "Gereksinimlerin veya risklerin test senaryolarıyla kapsanma yüzdesi",
        "Sadece kod satırı sayısı",
        "Sadece geliştirici sayısı",
        "Sadece toplantı süresi"
      ],
      "answer": 0
    },
    {
      "q": "Test araçlarının kategorilerinden biri olan \"test tasarım araçları\" ne işe yarar?",
      "options": [
        "Test girdilerinin veya test senaryolarının oluşturulmasına yardımcı olur",
        "Sadece kusur takibi yapar",
        "Sadece proje yönetimi yapar",
        "Sadece kod derler"
      ],
      "answer": 0
    },
    {
      "q": "Performans test araçlarının temel işlevi nedir?",
      "options": [
        "Sistemin yük altındaki davranışını simüle edip ölçmek",
        "Sadece kullanıcı arayüzünü test etmek",
        "Sadece kod kalitesini analiz etmek",
        "Sadece kusur takibi yapmak"
      ],
      "answer": 0
    },
    {
      "q": "Bir test aracı seçerken dikkate alınması gereken faktörlerden biri nedir?",
      "options": [
        "Organizasyonun olgunluk seviyesi, mevcut süreçlere ve araçlara uyumluluk",
        "Sadece aracın rengi",
        "Sadece aracın adı",
        "Sadece aracın üretici ülkesi"
      ],
      "answer": 0
    },
    {
      "q": "Test otomasyonunda genellikle otomatikleştirilmesi ÖNERİLMEYEN test türü hangisidir?",
      "options": [
        "Sık tekrarlanan, kararlı ve tekrarlanabilir regresyon testleri",
        "Bir kez çalıştırılacak, sık değişen veya kullanılabilirlik gibi öznel yargı gerektiren testler",
        "Build doğrulama testleri",
        "Performans testleri"
      ],
      "answer": 1
    }
  ],
  [
    {
      "q": "Test etmenin yazılım kalitesine katkısı nasıl açıklanır?",
      "options": [
        "Kusurları erken bulup gidererek ürünün gereksinimlere uygunluğunu artırır",
        "Test etme kaliteyi doğrudan artırmaz, sadece rapor üretir",
        "Test etme sadece maliyeti artırır",
        "Test etme kaliteyi ölçemez"
      ],
      "answer": 0
    },
    {
      "q": "Yedi test prensibinden \"erken test etme\" ile ilişkili kavram hangisidir?",
      "options": [
        "Sol kaydırma (shift-left)",
        "Sağ kaydırma (shift-right)",
        "Regresyon testi",
        "Pestisit paradoksu"
      ],
      "answer": 0
    },
    {
      "q": "Test sürecinin bileşenlerinden \"test analizi\" aşamasında ne yapılır?",
      "options": [
        "Test basisinin analiz edilerek test edilebilir test koşullarının belirlenmesi",
        "Test senaryolarının çalıştırılması",
        "Test ortamının kurulumu",
        "Kusur raporlarının kapatılması"
      ],
      "answer": 0
    },
    {
      "q": "Test sürecinin \"test tasarımı\" aşamasında ne yapılır?",
      "options": [
        "Test koşullarından test senaryolarının ve test verilerinin oluşturulması",
        "Sadece test planının yazılması",
        "Sadece kusurların raporlanması",
        "Sadece test ortamının kapatılması"
      ],
      "answer": 0
    },
    {
      "q": "Test sürecinin \"test uygulama (implementation)\" aşaması neyi kapsar?",
      "options": [
        "Test senaryolarının test prosedürlerine düzenlenmesi ve test ortamının hazırlanması",
        "Sadece test sonuçlarının raporlanması",
        "Sadece kusurların analiz edilmesi",
        "Sadece proje kapanışı"
      ],
      "answer": 0
    },
    {
      "q": "\"Test tamamlama\" (test completion) aşamasında hangi faaliyet gerçekleştirilir?",
      "options": [
        "Test iş ürünlerinin arşivlenmesi ve öğrenilen derslerin belgelenmesi",
        "Test senaryolarının ilk kez yazılması",
        "Test ortamının ilk kurulumu",
        "Gereksinimlerin toplanması"
      ],
      "answer": 0
    },
    {
      "q": "Test basisi (test basis) nedir?",
      "options": [
        "Test koşullarının ve test senaryolarının türetildiği tüm bilgi kaynağı (gereksinimler, tasarım vb.)",
        "Sadece kaynak kod",
        "Sadece kusur veritabanı",
        "Sadece test aracı"
      ],
      "answer": 0
    },
    {
      "q": "Test edilen nesne (test object) ifadesi neyi tanımlar?",
      "options": [
        "Test edilecek bileşen veya sistemin kendisini",
        "Test planını",
        "Test uzmanını",
        "Test raporunu"
      ],
      "answer": 0
    },
    {
      "q": "Test uzmanının bağımsızlığı (independence) ile ilgili en yüksek bağımsızlık seviyesi hangisidir?",
      "options": [
        "Organizasyon dışından, tamamen bağımsız bir test ekibi/uzmanı",
        "Kodu yazan geliştiricinin kendisi",
        "Aynı ekipteki başka bir geliştirici",
        "Proje yöneticisi"
      ],
      "answer": 0
    },
    {
      "q": "Test uzmanı ile geliştirici arasındaki zihniyet (mindset) farkı nasıl açıklanır?",
      "options": [
        "Test uzmanı eleştirel ve sorgulayıcı bir yaklaşımla kusur bulmaya odaklanır, geliştirici ise genelde çözüm üretmeye odaklanır",
        "İkisinin zihniyeti tamamen aynıdır",
        "Geliştirici her zaman daha eleştireldir",
        "Test uzmanı asla eleştirel olmamalıdır"
      ],
      "answer": 0
    },
    {
      "q": "Sıralı (sequential) geliştirme modeli olan Şelale (Waterfall) modelinin özelliği nedir?",
      "options": [
        "Aşamaların sırayla, bir öncekinin tamamlanmasından sonra yürütülmesi",
        "Aşamaların paralel ve tekrar eden kısa döngülerle yürütülmesi",
        "Test etmenin sadece son aşamada planlanması gerektiği",
        "Gereksinimlerin proje boyunca sürekli değiştiği"
      ],
      "answer": 0
    },
    {
      "q": "Çevik (Agile) yaklaşımlarda test etmenin özelliği nedir?",
      "options": [
        "Test etme geliştirmeyle iç içe, her iterasyonda sürekli yürütülür",
        "Test etme sadece proje sonunda yapılır",
        "Test etme geliştiriciler tarafından hiç yapılmaz",
        "Test etme sadece kabul aşamasında yapılır"
      ],
      "answer": 0
    },
    {
      "q": "Bileşen entegrasyon testi (component integration testing) hangi seviyede yer alır?",
      "options": [
        "Bileşen testi ile sistem testi arasında, bileşenlerin etkileşimini test eder",
        "Sadece kabul testinden sonra",
        "Sadece sistem testinden sonra",
        "Sadece proje başında"
      ],
      "answer": 0
    },
    {
      "q": "Sistem entegrasyon testi (system integration testing) neyi test eder?",
      "options": [
        "Farklı sistemler veya sistem ile üçüncü taraf hizmetler arasındaki etkileşimleri",
        "Tek bir bileşenin iç mantığını",
        "Kullanıcı arayüzü renklerini",
        "Sadece performansı"
      ],
      "answer": 0
    },
    {
      "q": "Operasyonel kabul testi (operational acceptance testing) neyi değerlendirir?",
      "options": [
        "Sistemin yedekleme, kurtarma, bakım gibi operasyonel yönlerini",
        "Sadece kullanıcı arayüzünü",
        "Sadece iş kurallarını",
        "Sadece güvenlik açıklarını"
      ],
      "answer": 0
    },
    {
      "q": "Yasal ve düzenleyici kabul testi (regulatory acceptance testing) hangi amaçla yapılır?",
      "options": [
        "Sistemin ilgili yasal düzenlemelere ve standartlara uygunluğunu doğrulamak için",
        "Sadece performansı ölçmek için",
        "Sadece kullanıcı memnuniyetini ölçmek için",
        "Sadece maliyeti azaltmak için"
      ],
      "answer": 0
    },
    {
      "q": "Statik testin gözden geçirme dışındaki bir formu hangisidir?",
      "options": [
        "Statik analiz (static analysis)",
        "Sınır değer analizi",
        "Karar tablosu testi",
        "Regresyon testi"
      ],
      "answer": 0
    },
    {
      "q": "Statik analiz araçlarıyla tespit edilebilecek bir sorun hangisidir?",
      "options": [
        "Ölü kod (dead code) veya erişilemeyen kod",
        "Kullanıcı memnuniyeti eksikliği",
        "İş süreci verimsizliği",
        "Pazarlama stratejisi hataları"
      ],
      "answer": 0
    },
    {
      "q": "Gözden geçirme sürecinde \"kontrol listeleri (checklists)\" ne amaçla kullanılır?",
      "options": [
        "Yaygın kusur türlerini hatırlatarak gözden geçirmenin tutarlılığını ve etkinliğini artırmak için",
        "Test otomasyonu yazmak için",
        "Performans ölçmek için",
        "Kod derlemek için"
      ],
      "answer": 0
    },
    {
      "q": "Bir gözden geçirmede \"yazar (author)\" rolünün sorumluluğu nedir?",
      "options": [
        "Gözden geçirilen iş ürününü oluşturmak ve bulunan sorunları ele almak",
        "Sadece toplantıyı yönetmek",
        "Sadece notları tutmak",
        "Sadece kaynakları tahsis etmek"
      ],
      "answer": 0
    },
    {
      "q": "Eşdeğerlik sınıfı testinde \"geçersiz eşdeğerlik sınıfı\" örneği hangisidir?",
      "options": [
        "Yaş alanına negatif bir değer girilmesi",
        "Yaş alanına 25 girilmesi",
        "Ad alanına geçerli bir isim girilmesi",
        "Form başarıyla gönderilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Sınır değer analizinde \"iki değerli\" (two-value) yaklaşımda hangi noktalar test edilir?",
      "options": [
        "Sınırın kendisi ve sınıra en yakın komşu değer",
        "Sadece sınırın çok uzağındaki değerler",
        "Sadece orta nokta değeri",
        "Sadece negatif değerler"
      ],
      "answer": 0
    },
    {
      "q": "Karar tablosunda test edilmesi gereken senaryo sayısı neye göre belirlenir?",
      "options": [
        "Tablodaki iş kurallarının (kombinasyonların) sayısına göre",
        "Sadece test uzmanının tercihine göre",
        "Sadece bütçeye göre",
        "Sadece zamana göre"
      ],
      "answer": 0
    },
    {
      "q": "Durum geçiş testinde \"0-switch kapsamı\" neyi ifade eder?",
      "options": [
        "Her geçerli tek geçişin en az bir kez test edilmesini",
        "Tüm olası durum kombinasyonlarının test edilmesini",
        "Sadece başlangıç durumunun test edilmesini",
        "Hiçbir geçişin test edilmemesini"
      ],
      "answer": 0
    },
    {
      "q": "Kullanım örneği testinin bir avantajı nedir?",
      "options": [
        "Kullanıcı perspektifinden gerçekçi iş akışlarını test ederek entegrasyon kusurlarını bulmaya yardımcı olması",
        "Sadece kod satırlarını kapsaması",
        "Sadece performansı ölçmesi",
        "Sadece güvenlik açıklarını bulması"
      ],
      "answer": 0
    },
    {
      "q": "Beyaz kutu testte \"kod kapsamı\" (code coverage) neden önemlidir?",
      "options": [
        "Testlerin kodun ne kadarını çalıştırdığını ölçerek test edilmemiş alanları ortaya çıkarır",
        "Sadece raporlama için gereklidir, teknik değeri yoktur",
        "Sadece yöneticiler için önemlidir",
        "Kullanıcı deneyimini doğrudan ölçer"
      ],
      "answer": 0
    },
    {
      "q": "Statement (ifade) ve decision (karar) kapsamı dışında başka bir yapısal kapsam ölçütü var mıdır?",
      "options": [
        "Evet, örneğin döngü kapsamı ve koşul kapsamı gibi ölçütler de bulunur",
        "Hayır, sadece bu ikisi vardır",
        "Hayır, yapısal kapsam sadece performans için kullanılır",
        "Evet ama sadece siyah kutu testte kullanılır"
      ],
      "answer": 0
    },
    {
      "q": "Deneyime dayalı test tekniklerinin bir sınırlılığı nedir?",
      "options": [
        "Sonuçların büyük ölçüde test uzmanının deneyim ve becerisine bağlı olması",
        "Her zaman daha uzun sürmesi",
        "Otomatikleştirilmesinin imkansız olması",
        "Sadece güvenlik testinde kullanılabilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Keşifsel testte \"harita çıkarma\" (charter) neyi tanımlar?",
      "options": [
        "Bir keşifsel test oturumunun hedefini ve kapsamını",
        "Test aracının lisansını",
        "Kusur önceliğini",
        "Test ortamının IP adresini"
      ],
      "answer": 0
    },
    {
      "q": "Test tekniklerini seçerken dikkate alınan faktörlerden biri hangisidir?",
      "options": [
        "Sistemin karmaşıklığı, düzenleyici standartlar ve mevcut riskler",
        "Sadece test uzmanının en sevdiği teknik",
        "Sadece bütçenin fazlalığı",
        "Sadece proje adı"
      ],
      "answer": 0
    },
    {
      "q": "Test organizasyonunda test uzmanının görevlerinden biri nedir?",
      "options": [
        "Test koşullarını ve senaryolarını analiz etmek, tasarlamak ve uygulamak",
        "Sadece proje bütçesini yönetmek",
        "Sadece pazarlama yapmak",
        "Sadece kullanıcı eğitimleri vermek"
      ],
      "answer": 0
    },
    {
      "q": "Risk analizi sırasında bir riskin \"olasılığı\" ve \"etkisi\" neyi belirler?",
      "options": [
        "Riskin önceliğini ve test çabasının ona göre dağıtılmasını",
        "Sadece raporun rengini",
        "Sadece toplantı sayısını",
        "Sadece bütçe miktarını"
      ],
      "answer": 0
    },
    {
      "q": "Test izleme ve kontrolünün (test monitoring & control) amacı nedir?",
      "options": [
        "Test ilerlemesini planla karşılaştırıp sapmalarda düzeltici aksiyon almak",
        "Sadece kusurları kapatmak",
        "Sadece test ortamını kurmak",
        "Sadece dokümantasyon üretmek"
      ],
      "answer": 0
    },
    {
      "q": "Bir test stratejisinde \"analitik test stratejisi\" (analytical strategy) neye dayanır?",
      "options": [
        "Risk analizi veya gereksinim analizi gibi sistematik bir analize dayanarak test tasarlanması",
        "Test uzmanının sezgisine dayanarak test tasarlanması",
        "Sadece geçmiş projelerin tekrarlanmasına",
        "Rastgele test senaryosu üretimine"
      ],
      "answer": 0
    },
    {
      "q": "Test verisi hazırlama araçlarının (test data preparation tools) amacı nedir?",
      "options": [
        "Test için gerçekçi veya kontrollü test verisi oluşturmak",
        "Sadece kod yazmak",
        "Sadece performans ölçmek",
        "Sadece kullanıcı arayüzü tasarlamak"
      ],
      "answer": 0
    },
    {
      "q": "Kusur takip araçlarının (defect management tools) temel işlevi nedir?",
      "options": [
        "Kusurların kaydedilmesini, izlenmesini ve yaşam döngüsünün yönetilmesini sağlamak",
        "Sadece kod derlemek",
        "Sadece performans testi yapmak",
        "Sadece kullanıcı eğitimi vermek"
      ],
      "answer": 0
    },
    {
      "q": "Sürekli entegrasyon (continuous integration) araçlarının test etmeyle ilişkisi nedir?",
      "options": [
        "Kod her değiştirildiğinde otomatik build ve test çalıştırılmasını sağlar",
        "Sadece manuel testi destekler",
        "Test etmeyle ilgisi yoktur",
        "Sadece dokümantasyon üretir"
      ],
      "answer": 0
    },
    {
      "q": "Test otomasyonuna geçişte dikkate alınması gereken bir faktör nedir?",
      "options": [
        "Otomasyonun yatırım getirisi (ROI) ve bakım maliyeti",
        "Sadece aracın ücretsiz olması",
        "Sadece popüler olması",
        "Sadece İngilizce arayüze sahip olması"
      ],
      "answer": 0
    },
    {
      "q": "Açık kaynak (open-source) test araçlarının bir riski olabilir mi?",
      "options": [
        "Evet, topluluk desteğinin sınırlı olması ve resmi destek eksikliği risk oluşturabilir",
        "Hayır, hiçbir riski yoktur",
        "Hayır, her zaman ticari araçlardan üstündür",
        "Evet ama sadece maliyet nedeniyle"
      ],
      "answer": 0
    },
    {
      "q": "Test uzmanının etik kurallarına göre \"meslek\" ilkesi neyi gerektirir?",
      "options": [
        "Mesleğin itibarını korumak ve yalnızca yetkinliği dahilindeki işleri üstlenmek",
        "Sadece kendi çıkarını maksimize etmek",
        "Rakip firmaların sırlarını ifşa etmek",
        "Hiçbir etik kurala uymamak"
      ],
      "answer": 0
    }
  ],
  [
    {
      "q": "Yazılım kalitesi ile ilgili aşağıdaki ifadelerden hangisi doğrudur?",
      "options": [
        "Kalite, ürünün açık ve zımni ihtiyaçları ne ölçüde karşıladığının derecesidir",
        "Kalite yalnızca kod satır sayısıyla ölçülür",
        "Kalite sadece test uzmanlarının sorumluluğundadır",
        "Kalite, kusur sayısının sıfır olması anlamına gelir"
      ],
      "answer": 0
    },
    {
      "q": "Test etmenin proje riskini azaltmadaki rolü nedir?",
      "options": [
        "Kusurları erken tespit ederek olası maliyetli hataların önüne geçmeye yardımcı olur",
        "Test etme proje riskini artırır",
        "Test etme sadece dokümantasyon üretir",
        "Test etme riskle ilgisizdir"
      ],
      "answer": 0
    },
    {
      "q": "\"Exhaustive testing is impossible\" prensibinin pratik sonucu nedir?",
      "options": [
        "Test çabalarının risk ve önceliklere göre odaklanması gerektiği",
        "Hiç test yapılmaması gerektiği",
        "Sadece otomatik testlerin yeterli olduğu",
        "Test etmenin gereksiz olduğu"
      ],
      "answer": 0
    },
    {
      "q": "Test etmenin ürün geliştirme sürecine erken dahil edilmesi hangi kavramla ifade edilir?",
      "options": [
        "Shift-left (sola kaydırma)",
        "Shift-right (sağa kaydırma)",
        "Regresyon",
        "Pestisit paradoksu"
      ],
      "answer": 0
    },
    {
      "q": "Bir test uzmanının psikolojik olarak nasıl bir yaklaşım sergilemesi beklenir?",
      "options": [
        "Yapıcı ama eleştirel, kusur bulmaya istekli bir yaklaşım",
        "Sadece geliştiriciyi memnun etmeye odaklı bir yaklaşım",
        "Kusur bulmaktan kaçınan bir yaklaşım",
        "Tamamen pasif bir yaklaşım"
      ],
      "answer": 0
    },
    {
      "q": "ISTQB Etik Kuralları'na göre test uzmanının işverenine karşı sorumluluğu nedir?",
      "options": [
        "Yetkinliği dahilinde dürüst ve gizlilik ilkelerine uygun hizmet vermek",
        "Sadece kendi çıkarını gözetmek",
        "İşvereninin talimatlarını sorgusuz uygulamak, etik ilkeleri göz ardı etmek",
        "Rakip firmalarla bilgi paylaşmak"
      ],
      "answer": 0
    },
    {
      "q": "Test sürecinde \"test yürütme (test execution)\" aşamasında ne yapılır?",
      "options": [
        "Test prosedürlerinin/senaryolarının manuel veya otomatik olarak çalıştırılması",
        "Sadece test senaryolarının yazılması",
        "Sadece test planının hazırlanması",
        "Sadece kusur kapatma kararlarının alınması"
      ],
      "answer": 0
    },
    {
      "q": "Test izleme ve kontrol aşaması test sürecinin hangi bölümüyle ilişkilidir?",
      "options": [
        "Tüm test süreci boyunca sürekli olarak yürütülür",
        "Sadece test tamamlandıktan sonra yürütülür",
        "Sadece test başlamadan önce yürütülür",
        "Sadece kusur raporlama sırasında yürütülür"
      ],
      "answer": 0
    },
    {
      "q": "Bileşen (birim) testi genellikle kim tarafından gerçekleştirilir?",
      "options": [
        "Genellikle geliştiriciler tarafından, kodu yazan kişi veya ekip tarafından",
        "Sadece son kullanıcılar tarafından",
        "Sadece bağımsız test ekibi tarafından, geliştiricinin hiç dahil olmadığı",
        "Sadece proje yöneticisi tarafından"
      ],
      "answer": 0
    },
    {
      "q": "Kabul testinin temel amacı nedir?",
      "options": [
        "Sistemin kullanıcı ihtiyaçlarını ve iş gereksinimlerini karşıladığına dair güven oluşturmak",
        "Sadece kod kalitesini ölçmek",
        "Sadece performansı optimize etmek",
        "Sadece kusur sayısını azaltmak"
      ],
      "answer": 0
    },
    {
      "q": "Alfa testi kim tarafından ve nerede yapılır?",
      "options": [
        "Geliştirme organizasyonunun kendi ortamında, potansiyel kullanıcılar veya bağımsız test ekibi tarafından",
        "Sadece son kullanıcı tarafından kendi ortamında",
        "Sadece geliştiriciler tarafından kodu yazarken",
        "Sadece otomatik araçlarla"
      ],
      "answer": 0
    },
    {
      "q": "Fonksiyonel test (functional testing) neyi değerlendirir?",
      "options": [
        "Sistemin ne yaptığını, işlevsel gereksinimleri karşılayıp karşılamadığını",
        "Sistemin ne kadar hızlı çalıştığını",
        "Sistemin ne kadar güvenli olduğunu",
        "Sistemin kullanıcı arayüzü estetiğini"
      ],
      "answer": 0
    },
    {
      "q": "Kullanılabilirlik testi (usability testing) hangi tür test kategorisine girer?",
      "options": [
        "Fonksiyonel olmayan test",
        "Fonksiyonel test",
        "Yapısal (beyaz kutu) test",
        "Değişiklikle ilgili test"
      ],
      "answer": 0
    },
    {
      "q": "Bakım testinde \"etki analizi\" (impact analysis) neyi amaçlar?",
      "options": [
        "Yapılan bir değişikliğin sistemin hangi bölümlerini etkileyebileceğini belirlemek",
        "Sadece kullanıcı arayüzünü güncellemek",
        "Sadece performansı artırmak",
        "Sadece kaynak kodu yeniden yazmak"
      ],
      "answer": 0
    },
    {
      "q": "Statik testin dinamik testle birlikte kullanılmasının nedeni nedir?",
      "options": [
        "Farklı türde kusurları tamamlayıcı şekilde tespit ederek genel kaliteyi artırmak",
        "Statik testin dinamik testin yerini tamamen alması",
        "Dinamik testin gereksiz hale gelmesi",
        "İkisinin birbirini engellemesi"
      ],
      "answer": 0
    },
    {
      "q": "Bir gözden geçirmenin \"kick-off\" (başlangıç) aşamasında ne yapılır?",
      "options": [
        "Katılımcılara amaç, süreç ve iş ürünü hakkında bilgi verilmesi",
        "Kusurların düzeltilmesi",
        "Test senaryolarının çalıştırılması",
        "Raporun imzalanması"
      ],
      "answer": 0
    },
    {
      "q": "\"Bireysel gözden geçirme (individual review)\" aşamasında ne yapılır?",
      "options": [
        "Her katılımcının iş ürününü bağımsız olarak inceleyip potansiyel kusurları not etmesi",
        "Sadece moderatörün iş ürününü incelemesi",
        "Sadece toplantıda tartışma yapılması",
        "Sadece raporun onaylanması"
      ],
      "answer": 0
    },
    {
      "q": "Gözden geçirme sonrası \"takip (follow-up)\" aşamasında ne kontrol edilir?",
      "options": [
        "Bulunan kusurların uygun şekilde giderilip giderilmediği",
        "Sadece toplantı tutanağının yazılıp yazılmadığı",
        "Sadece katılımcı sayısının yeterliliği",
        "Sadece bütçenin aşılıp aşılmadığı"
      ],
      "answer": 0
    },
    {
      "q": "Statik analiz ile bulunabilecek bir sorun türü hangisidir?",
      "options": [
        "Kullanılmayan (dead) kod parçaları veya döngü içinde sonsuz döngü riski",
        "Kullanıcı memnuniyetsizliği",
        "Pazarlama stratejisi eksiklikleri",
        "Fiyatlandırma hataları"
      ],
      "answer": 0
    },
    {
      "q": "Eşdeğerlik sınıflandırmasında sayısal bir alan (örn. 1-100) için kaç temel eşdeğerlik sınıfı genellikle tanımlanır?",
      "options": [
        "Geçerli aralık (1-100) ve iki geçersiz aralık (100'den küçük ve 100'den büyük)",
        "Sadece bir sınıf",
        "Sadece iki geçerli sınıf",
        "Sınıflandırma yapılmaz"
      ],
      "answer": 0
    },
    {
      "q": "Sınır değer analizinde \"üç değerli\" (three-value) yaklaşım hangi noktaları içerir?",
      "options": [
        "Sınırın kendisi, bir altı ve bir üstü",
        "Sadece sınırın kendisi",
        "Sadece uzak değerler",
        "Sadece orta nokta"
      ],
      "answer": 0
    },
    {
      "q": "Karar tablosunda \"don't care\" (fark etmez) değeri ne anlama gelir?",
      "options": [
        "O koşulun sonucu etkilemediği, herhangi bir değer alabileceği",
        "O koşulun test edilemeyeceği",
        "O koşulun her zaman doğru olduğu",
        "O koşulun her zaman yanlış olduğu"
      ],
      "answer": 0
    },
    {
      "q": "Durum geçiş testinde \"1-switch kapsamı\" neyi test eder?",
      "options": [
        "Art arda gelen iki geçişin (geçiş çiftlerinin) test edilmesini",
        "Sadece tek bir geçişi",
        "Tüm olası durumların aynı anda test edilmesini",
        "Hiçbir geçişi"
      ],
      "answer": 0
    },
    {
      "q": "Kullanım örneği testi hangi seviyede en çok kullanılır?",
      "options": [
        "Sistem testi ve kabul testi seviyelerinde",
        "Sadece birim testi seviyesinde",
        "Sadece kod inceleme aşamasında",
        "Sadece performans testi seviyesinde"
      ],
      "answer": 0
    },
    {
      "q": "Beyaz kutu testte döngü kapsamının (loop coverage) önemi nedir?",
      "options": [
        "Döngülerin sıfır, bir ve birden fazla kez çalıştığı durumları test ederek döngü kusurlarını ortaya çıkarması",
        "Sadece kodun okunabilirliğini artırması",
        "Sadece dokümantasyon için kullanılması",
        "Kullanıcı arayüzünü test etmesi"
      ],
      "answer": 0
    },
    {
      "q": "Deneyime dayalı testlerin resmi tekniklerle birlikte kullanılmasının avantajı nedir?",
      "options": [
        "Resmi tekniklerin gözden kaçırabileceği kusurları tamamlayıcı şekilde bulabilmesi",
        "Deneyime dayalı testlerin resmi teknikleri tamamen gereksiz kılması",
        "Sadece dokümantasyon üretmesi",
        "Otomasyonu imkansız kılması"
      ],
      "answer": 0
    },
    {
      "q": "Hata tahmini (error guessing) tekniğinde kullanılan bir kaynak hangisidir?",
      "options": [
        "Geçmiş projelerdeki yaygın kusur listeleri (defect taxonomy)",
        "Sadece kaynak kod",
        "Sadece kullanıcı arayüzü ekran görüntüleri",
        "Sadece bütçe raporları"
      ],
      "answer": 0
    },
    {
      "q": "Test tasarım tekniği seçiminde hangi faktör dikkate alınmaz?",
      "options": [
        "Test uzmanının doğum tarihi",
        "Sistem karmaşıklığı",
        "Riskler ve düzenleyici gereksinimler",
        "Mevcut zaman ve bütçe"
      ],
      "answer": 0
    },
    {
      "q": "Test yöneticisinin risk yönetimindeki rolü nedir?",
      "options": [
        "Ürün ve proje risklerini belirleyip test çabalarını buna göre önceliklendirmek",
        "Sadece kod yazmak",
        "Sadece pazarlama yapmak",
        "Sadece kullanıcı eğitimi vermek"
      ],
      "answer": 0
    },
    {
      "q": "Test tahmini yaparken \"uzman görüşüne dayalı (expert-based)\" yaklaşım nedir?",
      "options": [
        "Deneyimli kişilerin görüşlerine dayanarak tahmin yapılması (örn. Wideband Delphi)",
        "Sadece geçmiş verilerin istatistiksel analizine dayanması",
        "Sadece yazılımın otomatik hesaplaması",
        "Rastgele sayı üretilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Test giriş ve çıkış kriterlerinin (entry/exit criteria) amacı nedir?",
      "options": [
        "Bir test faaliyetinin ne zaman başlayıp ne zaman biteceğine dair net ölçütler sağlamak",
        "Sadece bütçeyi belirlemek",
        "Sadece ekip üyelerini belirlemek",
        "Sadece raporun formatını belirlemek"
      ],
      "answer": 0
    },
    {
      "q": "Bir kusur raporunda \"önem derecesi (severity)\" ile \"öncelik (priority)\" arasındaki fark nedir?",
      "options": [
        "Önem derecesi kusurun etkisinin büyüklüğünü, öncelik ise ne kadar hızlı çözülmesi gerektiğini ifade eder",
        "İkisi aynı anlama gelir",
        "Önem derecesi sadece maliyetle ilgilidir",
        "Öncelik sadece geliştiricinin tercihine bağlıdır"
      ],
      "answer": 0
    },
    {
      "q": "Yapılandırma yönetiminde \"versiyon kontrolü\" neden önemlidir?",
      "options": [
        "Test edilen yazılım sürümünün ve test iş ürünlerinin doğru şekilde izlenebilmesini sağlar",
        "Sadece dosya boyutunu küçültür",
        "Sadece kullanıcı arayüzünü güzelleştirir",
        "Sadece performansı artırır"
      ],
      "answer": 0
    },
    {
      "q": "Test kapsamı (test coverage) metriği neyi ölçer?",
      "options": [
        "Test edilen öğelerin (gereksinim, kod, risk vb.) toplam öğelere oranını",
        "Sadece test uzmanı sayısını",
        "Sadece proje süresini",
        "Sadece bütçe harcamasını"
      ],
      "answer": 0
    },
    {
      "q": "Test tasarım araçlarının bir örneği hangisidir?",
      "options": [
        "Model tabanlı test araçları veya karar tablosu oluşturma araçları",
        "Sadece kelime işlemci programları",
        "Sadece e-posta istemcileri",
        "Sadece resim düzenleme araçları"
      ],
      "answer": 0
    },
    {
      "q": "Test yürütme araçlarının (test execution tools) temel işlevi nedir?",
      "options": [
        "Test senaryolarını otomatik olarak çalıştırmak ve sonuçları kaydetmek",
        "Sadece test planı yazmak",
        "Sadece kusur analiz etmek",
        "Sadece proje bütçesi hesaplamak"
      ],
      "answer": 0
    },
    {
      "q": "Test otomasyonu için \"ROI (yatırım getirisi)\" hesaplanırken nelere bakılır?",
      "options": [
        "Otomasyonun geliştirme ve bakım maliyeti ile sağladığı zaman/kalite kazancının karşılaştırılması",
        "Sadece aracın satın alma fiyatı",
        "Sadece test uzmanı sayısı",
        "Sadece proje adı"
      ],
      "answer": 0
    },
    {
      "q": "Bir test aracının pilot uygulaması (pilot project) neden önerilir?",
      "options": [
        "Aracın organizasyonun ihtiyaçlarına uygunluğunu küçük ölçekte doğrulamak için",
        "Sadece maliyeti artırmak için",
        "Sadece süreci uzatmak için",
        "Sadece dokümantasyon üretmek için"
      ],
      "answer": 0
    },
    {
      "q": "Test yönetim araçlarının sağladığı bir fayda hangisidir?",
      "options": [
        "Test senaryolarının, sonuçların ve kusurların merkezi olarak izlenebilmesi",
        "Sadece kod yazma hızını artırması",
        "Sadece kullanıcı arayüzü tasarımı yapması",
        "Sadece performans testi yapması"
      ],
      "answer": 0
    },
    {
      "q": "Test verisi (test data) hazırlanırken gizlilik/veri koruma açısından dikkat edilmesi gereken nedir?",
      "options": [
        "Gerçek üretim verisi kullanılıyorsa kişisel verilerin maskelenmesi veya anonimleştirilmesi",
        "Her zaman gerçek müşteri verisinin olduğu gibi kullanılması",
        "Veri koruma kurallarının test ortamında geçerli olmadığı",
        "Test verisinin hiç dikkate alınmaması"
      ],
      "answer": 0
    }
  ],
  [
    {
      "q": "Test kapsamı ölçütleri arasında \"gereksinim kapsamı (requirements coverage)\" neyi ifade eder?",
      "options": [
        "Test senaryolarıyla eşleştirilen gereksinimlerin toplam gereksinimlere oranını",
        "Sadece kod satırı sayısını",
        "Sadece test uzmanı sayısını",
        "Sadece geçen süreyi"
      ],
      "answer": 0
    },
    {
      "q": "Test etmenin \"doğrulama (verification)\" ve \"geçerleme (validation)\" arasındaki farkı nedir?",
      "options": [
        "Doğrulama 'ürünü doğru inşa ediyor muyuz' sorusuna, geçerleme 'doğru ürünü mü inşa ediyoruz' sorusuna odaklanır",
        "İkisi aynı anlama gelir",
        "Doğrulama sadece kullanıcıyla ilgilidir",
        "Geçerleme sadece kodla ilgilidir"
      ],
      "answer": 0
    },
    {
      "q": "Test etmenin ekonomik faydası nedir?",
      "options": [
        "Kusurları erken bulup gidermenin, geç bulmaya göre çok daha az maliyetli olması",
        "Test etme her zaman ek maliyet olup fayda sağlamaz",
        "Test etme sadece büyük projelerde faydalıdır",
        "Test etme maliyeti hiçbir zaman geri kazanılmaz"
      ],
      "answer": 0
    },
    {
      "q": "\"Kusur kümelenmesi\" prensibinin pratik uygulaması nedir?",
      "options": [
        "Geçmişte çok kusur bulunan modüllere test çabasının yoğunlaştırılması",
        "Tüm modüllere eşit test çabası harcanması",
        "Sadece yeni modüllerin test edilmesi",
        "Test çabasının rastgele dağıtılması"
      ],
      "answer": 0
    },
    {
      "q": "\"Pestisit paradoksunu\" aşmak için ne yapılması önerilir?",
      "options": [
        "Test senaryolarının düzenli olarak gözden geçirilip güncellenmesi ve yeni testler eklenmesi",
        "Aynı testlerin hiç değiştirilmeden sonsuza kadar kullanılması",
        "Test senaryolarının tamamen silinmesi",
        "Sadece manuel testin bırakılması"
      ],
      "answer": 0
    },
    {
      "q": "Test sürecinde \"test koşulu (test condition)\" nedir?",
      "options": [
        "Bir test basisinden türetilen, test edilebilir bir öğe veya olay",
        "Test aracının bir özelliği",
        "Test raporunun bir bölümü",
        "Kusur önceliği"
      ],
      "answer": 0
    },
    {
      "q": "Test tasarımı sırasında oluşturulan \"test verisi (test data)\" ne işe yarar?",
      "options": [
        "Test senaryolarının yürütülmesi sırasında girdi olarak kullanılan verileri sağlar",
        "Sadece raporlama için kullanılır",
        "Sadece kod derleme için gereklidir",
        "Sadece proje yönetimi için kullanılır"
      ],
      "answer": 0
    },
    {
      "q": "Test uzmanlarının bağımsızlığının bir dezavantajı olabilir mi?",
      "options": [
        "Evet, sistemle ilgili bağlamsal bilgi eksikliği ve iletişim kopukluğu yaşanabilir",
        "Hayır, bağımsızlığın hiçbir dezavantajı yoktur",
        "Hayır, bağımsızlık her zaman maliyeti düşürür",
        "Evet ama sadece bütçe açısından"
      ],
      "answer": 0
    },
    {
      "q": "Component (bileşen) testinde genellikle hangi yaklaşım kullanılır?",
      "options": [
        "Sürücüler (drivers) ve saplamalar (stubs) kullanarak bileşenin izole test edilmesi",
        "Sadece tüm sistemin bir arada test edilmesi",
        "Sadece kullanıcı arayüzünün test edilmesi",
        "Sadece performans ölçümü yapılması"
      ],
      "answer": 0
    },
    {
      "q": "\"Big-bang\" entegrasyon yaklaşımının bir dezavantajı nedir?",
      "options": [
        "Kusurların kök nedeninin izole edilmesinin zor olması, çünkü tüm bileşenler aynı anda entegre edilir",
        "Çok fazla zaman kazandırması",
        "Test senaryosu gerektirmemesi",
        "Sadece küçük projelerde kullanılabilmesi"
      ],
      "answer": 0
    },
    {
      "q": "Aşamalı (incremental) entegrasyon yaklaşımının avantajı nedir?",
      "options": [
        "Kusurların daha kolay izole edilebilmesi ve erken geri bildirim sağlanması",
        "Test çabasının tamamen ortadan kalkması",
        "Sadece büyük projelerde uygulanabilir olması",
        "Entegrasyon testine hiç gerek kalmaması"
      ],
      "answer": 0
    },
    {
      "q": "Sistem testinde test ortamının gerçek üretim ortamına benzerliği neden önemlidir?",
      "options": [
        "Gerçekçi sonuçlar elde edilmesini ve üretimde ortaya çıkabilecek sorunların önceden tespit edilmesini sağlar",
        "Test maliyetini artırmak için",
        "Test süresini kısaltmak için",
        "Kullanıcıları memnun etmek için"
      ],
      "answer": 0
    },
    {
      "q": "Kabul testinde \"sözleşme kabul testi (contract acceptance testing)\" ne amaçla yapılır?",
      "options": [
        "Sistemin sözleşmede belirtilen şartları karşıladığını doğrulamak için",
        "Sadece performansı ölçmek için",
        "Sadece kullanıcı arayüzünü değerlendirmek için",
        "Sadece güvenliği test etmek için"
      ],
      "answer": 0
    },
    {
      "q": "Güvenlik testi (security testing) hangi kategoriye girer?",
      "options": [
        "Fonksiyonel olmayan test",
        "Yapısal test",
        "Değişiklikle ilgili test",
        "Statik test"
      ],
      "answer": 0
    },
    {
      "q": "Birlikte çalışabilirlik testi (interoperability testing) neyi değerlendirir?",
      "options": [
        "Sistemin diğer sistemlerle etkin şekilde etkileşim kurabilme yeteneğini",
        "Sadece kullanıcı arayüzü estetiğini",
        "Sadece kod kalitesini",
        "Sadece performansı"
      ],
      "answer": 0
    },
    {
      "q": "Bakım testi hangi durumlarda tetiklenir?",
      "options": [
        "Planlı bir sürüm güncellemesi, acil bir yama veya çevresel bir değişiklik olduğunda",
        "Sadece proje ilk başladığında",
        "Sadece kabul testi sırasında",
        "Sadece kod incelemesi sırasında"
      ],
      "answer": 0
    },
    {
      "q": "Statik testin bir sınırlılığı nedir?",
      "options": [
        "Kodun çalışma zamanı davranışıyla ilgili bazı kusurları (örn. zamanlama sorunları) tespit edemeyebilir",
        "Hiçbir sınırlılığı yoktur",
        "Sadece büyük projelerde kullanılabilir",
        "Sadece otomatik araçlarla yapılabilir"
      ],
      "answer": 0
    },
    {
      "q": "Bir inceleme (inspection) sürecinde kusur yoğunluğu (defect density) neden kaydedilir?",
      "options": [
        "Gözden geçirme sürecinin etkinliğini ölçmek ve gelecekteki gözden geçirmeleri iyileştirmek için",
        "Sadece raporu uzatmak için",
        "Sadece katılımcıları cezalandırmak için",
        "Sadece bütçe hesaplamak için"
      ],
      "answer": 0
    },
    {
      "q": "Gözden geçirme türleri arasında en fazla hazırlık ve resmiyet gerektiren hangisidir?",
      "options": [
        "İnceleme (inspection)",
        "Gayri resmi gözden geçirme (informal review)",
        "Yürüyüş (walkthrough)",
        "Hızlı göz atma"
      ],
      "answer": 0
    },
    {
      "q": "Statik analiz araçlarının bir faydası nedir?",
      "options": [
        "Kod yazıldıktan hemen sonra, çalıştırılmadan potansiyel sorunları erken tespit etmesi",
        "Sadece kullanıcı arayüzünü güzelleştirmesi",
        "Sadece performans artışı sağlaması",
        "Sadece dokümantasyon üretmesi"
      ],
      "answer": 0
    },
    {
      "q": "Eşdeğerlik sınıfı testinde bir e-posta alanı için geçersiz sınıf örneği nedir?",
      "options": [
        "'@' işareti içermeyen bir metin",
        "Geçerli formatta bir e-posta adresi",
        "Boş bırakılabilir bir alan için boş değer (izin veriliyorsa)",
        "Standart uzunlukta bir e-posta adresi"
      ],
      "answer": 0
    },
    {
      "q": "Sınır değer analizinin eşdeğerlik sınıflandırmasıyla ilişkisi nedir?",
      "options": [
        "Genellikle eşdeğerlik sınıflarının sınırlarında ek testler yaparak onu tamamlar",
        "Birbirinden tamamen bağımsız, ilgisiz tekniklerdir",
        "Sınır değer analizi eşdeğerlik sınıflandırmasının yerini tamamen alır",
        "İkisi asla birlikte kullanılamaz"
      ],
      "answer": 0
    },
    {
      "q": "Karar tablosu testinde \"daraltılmış (collapsed) karar tablosu\" ne işe yarar?",
      "options": [
        "Sonucu etkilemeyen koşulları birleştirerek test edilmesi gereken kombinasyon sayısını azaltmak",
        "Test kombinasyonu sayısını artırmak",
        "Tabloyu daha karmaşık hale getirmek",
        "Koşulları tamamen kaldırmak"
      ],
      "answer": 0
    },
    {
      "q": "Durum geçiş tablosunda \"geçersiz geçiş\" nasıl gösterilir?",
      "options": [
        "İlgili durum ve olay kesişiminde geçerli bir sonraki durumun tanımlanmaması ile",
        "Her zaman yeşil renkle",
        "Her zaman sıfır ile",
        "Gösterilmez, tablo sadece geçerli geçişleri içerir"
      ],
      "answer": 0
    },
    {
      "q": "Kullanım örneği testinin bir sınırlılığı nedir?",
      "options": [
        "Sadece tanımlı senaryoları kapsadığından, tanımlanmamış istisnai durumları gözden kaçırabilir",
        "Hiçbir sınırlılığı yoktur",
        "Sadece performans testinde kullanılabilir",
        "Otomasyona hiç uygun değildir"
      ],
      "answer": 0
    },
    {
      "q": "Beyaz kutu testte \"koşul kapsamı (condition coverage)\" neyi ölçer?",
      "options": [
        "Bir kararı oluşturan her bir bireysel koşulun hem doğru hem yanlış değer almasını",
        "Sadece kararın genel sonucunu",
        "Sadece kod satır sayısını",
        "Sadece döngü sayısını"
      ],
      "answer": 0
    },
    {
      "q": "Yol kapsamı (path coverage) neden pratikte genellikle tam olarak uygulanmaz?",
      "options": [
        "Karmaşık programlarda olası yol sayısının çok fazla olması nedeniyle",
        "Yol kapsamının hiçbir faydası olmadığı için",
        "Yasal olarak yasak olduğu için",
        "Sadece siyah kutu testte geçerli olduğu için"
      ],
      "answer": 0
    },
    {
      "q": "Deneyime dayalı test tekniklerinin resmi test tasarım süreciyle birleştirilmesine ne denir?",
      "options": [
        "Karma (hybrid) test yaklaşımı",
        "Sadece otomasyon",
        "Sadece statik test",
        "Sadece regresyon testi"
      ],
      "answer": 0
    },
    {
      "q": "Keşifsel test sırasında bulunan gözlemler nasıl belgelenir?",
      "options": [
        "Test notları, oturum raporları veya kusur kayıtları aracılığıyla",
        "Hiçbir şekilde belgelenmez",
        "Sadece sözlü olarak aktarılır",
        "Sadece hafızada tutulur"
      ],
      "answer": 0
    },
    {
      "q": "Test tekniği seçiminde \"model tabanlı test\" hangi teknik kategorisine daha yakındır?",
      "options": [
        "Siyah kutu teknikleri (durum geçiş modelleri gibi modellere dayandığı için)",
        "Sadece beyaz kutu teknikleri",
        "Sadece deneyime dayalı teknikler",
        "Hiçbirine dayanmaz"
      ],
      "answer": 0
    },
    {
      "q": "Test organizasyonunda \"test lideri (test lead)\" ile \"test uzmanı (tester)\" arasındaki fark nedir?",
      "options": [
        "Test lideri planlama ve koordinasyona odaklanırken test uzmanı test tasarımı ve yürütmeye odaklanır",
        "İkisi aynı görevi yapar",
        "Test lideri hiç test yazmaz ve hiç plan yapmaz",
        "Test uzmanı sadece raporlama yapar"
      ],
      "answer": 0
    },
    {
      "q": "Risk analizinde \"risk düzeyi (risk level)\" nasıl hesaplanır?",
      "options": [
        "Olasılık ve etkinin bir kombinasyonu (örn. çarpımı) olarak",
        "Sadece olasılığa bakılarak",
        "Sadece etkiye bakılarak",
        "Rastgele atanarak"
      ],
      "answer": 0
    },
    {
      "q": "Test stratejisi türlerinden \"risk tabanlı strateji\" neye odaklanır?",
      "options": [
        "Belirlenen risklere göre test çabasının önceliklendirilmesine",
        "Sadece maliyetin en aza indirilmesine",
        "Sadece zamanın en aza indirilmesine",
        "Sadece kullanıcı sayısına"
      ],
      "answer": 0
    },
    {
      "q": "Test durum toplantılarında (test status meetings) hangi bilgi paylaşılır?",
      "options": [
        "Test ilerlemesi, karşılaşılan engeller ve risklerle ilgili güncel durum",
        "Sadece şirketin genel finansal durumu",
        "Sadece pazarlama stratejileri",
        "Sadece insan kaynakları politikaları"
      ],
      "answer": 0
    },
    {
      "q": "Bir kusur raporunun yaşam döngüsünde \"yeniden açma (reopen)\" durumu ne zaman kullanılır?",
      "options": [
        "Kusur düzeltildiği iddia edilmesine rağmen doğrulama testinde sorun devam ettiğinde",
        "Kusur ilk kez raporlandığında",
        "Kusur hiç test edilmediğinde",
        "Kusur raporu silindiğinde"
      ],
      "answer": 0
    },
    {
      "q": "Yapılandırma yönetimi olmadan test etmede ne gibi bir sorun yaşanabilir?",
      "options": [
        "Hangi yazılım sürümünün hangi testlerle test edildiğinin karışması ve izlenebilirliğin kaybolması",
        "Test süresinin kısalması",
        "Kusur sayısının azalması",
        "Otomasyonun kolaylaşması"
      ],
      "answer": 0
    },
    {
      "q": "Test araçlarının sınıflandırılmasında \"kusur yönetimi araçları\" hangi kategoriye girer?",
      "options": [
        "Test yönetimini destekleyen araçlar",
        "Test tasarım araçları",
        "Statik test araçları",
        "Performans test araçları"
      ],
      "answer": 0
    },
    {
      "q": "Model tabanlı test araçlarının (model-based testing tools) işlevi nedir?",
      "options": [
        "Bir modelden (örn. durum diyagramı) otomatik olarak test senaryoları üretmek",
        "Sadece kod derlemek",
        "Sadece kullanıcı arayüzü tasarlamak",
        "Sadece proje bütçesi hesaplamak"
      ],
      "answer": 0
    },
    {
      "q": "Test otomasyon çerçevesi (test automation framework) seçerken dikkat edilmesi gereken nedir?",
      "options": [
        "Projenin teknoloji yığınıyla uyumluluğu ve bakım kolaylığı",
        "Sadece aracın adı",
        "Sadece popülerlik sıralaması",
        "Sadece renk teması"
      ],
      "answer": 0
    },
    {
      "q": "Yeni bir test aracının organizasyona getirilmesinde ilk adım genellikle nedir?",
      "options": [
        "İhtiyaçların belirlenmesi ve gereksinimlere göre uygun adayların değerlendirilmesi",
        "Doğrudan lisans satın alınması",
        "Sadece rastgele bir araç seçilmesi",
        "Hiçbir değerlendirme yapılmadan kurulum yapılması"
      ],
      "answer": 0
    }
  ]
];
