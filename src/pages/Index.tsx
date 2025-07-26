import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const budgetData = [
    { category: 'Здравоохранение', amount: 72, percentage: 20.0, color: 'bg-blue-500' },
    { category: 'Образование', amount: 65, percentage: 18.0, color: 'bg-green-500' },
    { category: 'Оборона', amount: 55, percentage: 15.3, color: 'bg-red-500' },
    { category: 'Наука и технологии', amount: 54, percentage: 15.0, color: 'bg-purple-500' },
    { category: 'Инфраструктура', amount: 40, percentage: 11.1, color: 'bg-orange-500' },
    { category: 'Социальное обеспечение', amount: 29, percentage: 8.1, color: 'bg-yellow-500' },
    { category: 'Экология', amount: 18, percentage: 5.1, color: 'bg-emerald-500' },
    { category: 'Культура', amount: 11, percentage: 3.1, color: 'bg-pink-500' },
    { category: 'Международные связи', amount: 7, percentage: 1.9, color: 'bg-indigo-500' },
    { category: 'Резервный фонд', amount: 9, percentage: 2.5, color: 'bg-gray-500' }
  ];

  const administrativeData = [
    { name: 'Столичный округ Асхиния', center: 'Асхиния', population: 5.6, features: 'Столица, IT, финансы, СМИ, промышленность', position: 'Запад' },
    { name: 'Столичный округ Хвиней', center: 'Хвиней', population: 4.9, features: 'Главный порт, судостроение, рыболовство, ВПК, логистика', position: 'Север (побережье)' },
    { name: 'Центральная провинция', center: 'Сармонт', population: 3.9, features: 'Тяжёлая промышленность, транспортный хаб (ж/д, шоссе)', position: 'Центр' },
    { name: 'Восточная провинция', center: 'Савея', population: 3.5, features: 'Технопарки, ВПК, НИОКР, IT-кластеры', position: 'Восток' },
    { name: 'Западная провинция', center: 'Катрианпи', population: 2.6, features: 'Промышленность (авто, робототехника), порты-спутники Хвинея', position: 'Запад' },
    { name: 'Южная провинция', center: 'Вега', population: 1.9, features: 'Сельское хозяйство (зерно, виноград, фрукты)', position: 'Юг' },
    { name: 'Северная провинция', center: 'Касалья', population: 1.4, features: 'Курорты, виноделие, лёгкая промышленность', position: 'Север' }
  ];

  const militaryData = [
    { branch: 'Сухопутные войска', equipment: 'Танки: ~300, БТР: 800, Артиллерия: 400, РСЗО: 150' },
    { branch: 'ВВС', equipment: 'Истребители: 60, БПЛА: 300, Бомбардировщики: 18, Транспортные: 12' },
    { branch: 'ВМФ', equipment: 'Фрегаты: 10, Противолодочные: 7, Подлодки: 3, Ракетные катера: 16' }
  ];

  const economicIndicators = [
    { indicator: 'ВВП (номинальный)', value: '1,2 трлн сашинов' },
    { indicator: 'ВВП на душу населения', value: '50,400 сашинов (~44,800 USD)' },
    { indicator: 'Рост ВВП', value: '4,8%' },
    { indicator: 'Безработица', value: '3,1%' },
    { indicator: 'Инфляция', value: '2,8%' },
    { indicator: 'Экспорт', value: '300 млрд сашинов' },
    { indicator: 'Импорт', value: '280 млрд сашинов' },
    { indicator: 'Доля экспорта в ВВП', value: '~25%' }
  ];

  const navigationItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'government', label: 'Государственное устройство', icon: 'Building2' },
    { id: 'geography', label: 'География', icon: 'MapPin' },
    { id: 'history', label: 'История', icon: 'Scroll' },
    { id: 'economy', label: 'Экономика', icon: 'TrendingUp' },
    { id: 'military', label: 'Вооружённые силы', icon: 'Shield' },
    { id: 'administrative', label: 'Административное деление', icon: 'Map' },
    { id: 'culture', label: 'Культура', icon: 'Palette' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Flag */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/files/d73e405f-a92f-4f8f-b20c-93e002ac6571.png"
              alt="Флаг Сашианийской Республики"
              className="w-12 h-8 object-cover border border-gray-300"
            />
            <div>
              <h1 className="text-2xl font-bold text-black">Сашианийская Республика</h1>
              <p className="text-sm text-gray-600">Материал из Википедии — свободной энциклопедии</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Navigation Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Содержание</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "default" : "ghost"}
                    className="w-full justify-start text-sm"
                    onClick={() => setActiveSection(item.id)}
                  >
                    <Icon name={item.icon} size={16} className="mr-2" />
                    {item.label}
                  </Button>
                ))}
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg">Основные сведения</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <strong>Столица:</strong> Асхиния
                </div>
                <div>
                  <strong>Население:</strong> 23,8 млн
                </div>
                <div>
                  <strong>Площадь:</strong> 92,400 км²
                </div>
                <div>
                  <strong>Валюта:</strong> Сашин (SHN)
                </div>
                <div>
                  <strong>Президент:</strong> Карл Маркес
                </div>
                <div>
                  <strong>Премьер-министр:</strong> Лилия Вест
                </div>
                <div>
                  <strong>Независимость:</strong> 15 августа 1948
                </div>
                <div>
                  <strong>Девиз:</strong> "Слава Республике, Слава Сашиании!"
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {activeSection === 'main' && (
              <div className="space-y-6">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed">
                    <strong>Сашианийская Республика</strong> — суверенное государство, расположенное на северо-западе материка Альвания. 
                    Это одна из наиболее развитых стран региона, известная высокими технологиями, динамичной экономикой и активной внешней политикой.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Users" size={20} />
                        Население
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">23,8 млн</div>
                      <p className="text-gray-600">человек (2025 год)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="DollarSign" size={20} />
                        ВВП
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">1,2 трлн</div>
                      <p className="text-gray-600">сашинов</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="MapPin" size={20} />
                        Площадь
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-purple-600">92,400</div>
                      <p className="text-gray-600">км²</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Flag and Coat of Arms */}
                <Card>
                  <CardHeader>
                    <CardTitle>Государственная символика</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Флаг</h4>
                        <img 
                          src="https://cdn.poehali.dev/files/d73e405f-a92f-4f8f-b20c-93e002ac6571.png"
                          alt="Флаг Сашианийской Республики"
                          className="w-full max-w-sm border border-gray-300 mb-2"
                        />
                        <p className="text-sm text-gray-600">
                          Вертикальные полосы белого, бордового и синего цветов. По центру — золотой герб: 
                          пшеничный колос с корнями, в нижней части колоса находится щит с пучком трёх стрел.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Герб</h4>
                        <p className="text-sm text-gray-600">
                          Щит с изображением пшеничного колоса, символизирующего плодородие, и щит с изображением 
                          трёх стрел, означающий стойкость Сашиании, единство и прогресс.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'government' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">Государственное устройство</h2>
                
                <div className="prose max-w-none">
                  <p>
                    Сашиания является <strong>президентской федеративной республикой</strong> с разделением властей на исполнительную, 
                    законодательную и судебную ветви.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Crown" size={20} />
                        Президент
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">Карл Маркес</div>
                      <p className="text-sm text-gray-600 mt-2">
                        Избирается на 5 лет, возглавляет армию и управляет внешней политикой
                      </p>
                      <Badge className="mt-2">С 2020 года</Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Users" size={20} />
                        Премьер-министр
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="font-semibold">Лилия Вест</div>
                      <p className="text-sm text-gray-600 mt-2">
                        Формирует кабинет министров, руководит правительством
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Building2" size={20} />
                        Парламент
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div>
                          <div className="font-semibold text-sm">Сенат</div>
                          <p className="text-xs text-gray-600">Верхняя палата, представители регионов</p>
                        </div>
                        <div>
                          <div className="font-semibold text-sm">Палата народных депутатов</div>
                          <p className="text-xs text-gray-600">Выборы каждые 4 года</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeSection === 'geography' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">География</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Расположение и границы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Сашиания находится в умеренной зоне северного побережья Альвании.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Границы:</h4>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Север:</strong> Сашианийский океан</li>
                          <li><strong>Восток:</strong> Кусарийская Демократическая Республика</li>
                          <li><strong>Юг:</strong> Государство Кальвария</li>
                          <li><strong>Запад:</strong> Королевство Вестмарк</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Рельеф:</h4>
                        <ul className="space-y-1 text-sm">
                          <li><strong>Север:</strong> холмистые плато, леса, океан и горы</li>
                          <li><strong>Центр:</strong> равнины с развитой промышленностью</li>
                          <li><strong>Юг:</strong> долины и степи, сельское хозяйство</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Климат</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded">
                        <h4 className="font-semibold">Север</h4>
                        <p className="text-sm text-gray-600">Умеренно-океанический</p>
                        <p className="text-xs">Влажные лета, мягкие зимы</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded">
                        <h4 className="font-semibold">Центр</h4>
                        <p className="text-sm text-gray-600">Умеренно-континентальный</p>
                        <p className="text-xs">Тёплое лето, холодные зимы</p>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded">
                        <h4 className="font-semibold">Юг</h4>
                        <p className="text-sm text-gray-600">Субтропический</p>
                        <p className="text-xs">Тёплые зимы, жаркое лето</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Водные объекты</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Река Асхиния</li>
                      <li>Озеро Велара</li>
                      <li>Крупные водохранилища</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'history' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">История</h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Clock" size={20} />
                        Ранние эпохи
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        Первые поселения возникли в <strong>III тыс. до н.э.</strong> К VI веку до н.э. 
                        сложились торговые города.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Castle" size={20} />
                        Средневековье
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>
                        <strong>X–XIII века</strong> — период феодальных войн. В XIV веке образовалось 
                        два государства: Сашия и Ания.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Scroll" size={20} />
                        Новое и новейшее время
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold">XIX век — колонизация страной Ортании</h4>
                        </div>
                        <div>
                          <h4 className="font-semibold">1947–1948 — Война за независимость</h4>
                          <p className="text-sm text-gray-600">
                            Сашия и Ания выиграли у Ортании контроль над ключевыми территориями 
                            и по договору объединились в единую Республику.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold">15 августа 1948 — Провозглашение независимости</h4>
                          <p className="text-sm text-gray-600">
                            Объединение Сашии и Ании в одно единое государство.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold">1960–1980 — Экономический бум</h4>
                          <p className="text-sm text-gray-600">
                            Инвестиции в IT, энергетику и сельское хозяйство сделали страну 
                            региональным лидером.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeSection === 'economy' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">Экономика</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Макроэкономические показатели</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {economicIndicators.map((item, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-sm">{item.indicator}:</span>
                            <span className="text-sm font-semibold">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Основные отрасли</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <Icon name="Monitor" size={16} />
                          <span><strong>IT и электроника</strong> — ПО, чипы, телекоммуникации</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Wheat" size={16} />
                          <span><strong>Сельское хозяйство</strong> — зерно, фрукты, виноград</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Cog" size={16} />
                          <span><strong>Машиностроение</strong> — робототехника, автомобили</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Zap" size={16} />
                          <span><strong>Энергетика</strong> — водоэнергетика, солнечные станции</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Государственный бюджет (360 млрд сашинов)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {budgetData.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium">{item.category}</span>
                            <span className="text-sm text-gray-600">{item.amount} млрд ({item.percentage}%)</span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Торговля</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Экспорт</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Электроника</li>
                          <li>• Программное обеспечение</li>
                          <li>• Продовольствие</li>
                          <li>• Автомобили</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Импорт</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Сырьё для промышленности</li>
                          <li>• Интеллектуальные услуги</li>
                          <li>• Ресурсы (инженеры, IT-специалисты)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Торговые партнёры</h4>
                      <p className="text-sm">Ортания, Кальвария, Вестмарк</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'military' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">Вооружённые силы</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="DollarSign" size={20} />
                        Бюджет
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-red-600">55 млрд</div>
                      <p className="text-gray-600">сашинов</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Users" size={20} />
                        Численность
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600">120 тыс.</div>
                      <p className="text-gray-600">человек</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Shield" size={20} />
                        Резерв
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-green-600">250 тыс.</div>
                      <p className="text-gray-600">человек</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  {militaryData.map((branch, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{branch.branch}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{branch.equipment}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Интересный факт</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600">
                      Высокие расходы на оборону оправданы тем, что Кусария — хоть и бедная страна 
                      по сравнению с Сашианией, но с очень развитым ВПК, что представляет угрозу для Республики.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'administrative' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">Административное деление</h2>
                
                <p className="text-gray-600">
                  Сашиания разделена на 5 провинций и 2 столичных округа.
                </p>

                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Административная единица</TableHead>
                          <TableHead>Центр</TableHead>
                          <TableHead>Население</TableHead>
                          <TableHead>Позиция</TableHead>
                          <TableHead>Особенности</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {administrativeData.map((region, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{region.name}</TableCell>
                            <TableCell>{region.center}</TableCell>
                            <TableCell>{region.population} млн</TableCell>
                            <TableCell>{region.position}</TableCell>
                            <TableCell className="text-sm">{region.features}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeSection === 'culture' && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold border-b border-gray-200 pb-2">Культура</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="DollarSign" size={20} />
                        Бюджет культуры
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-purple-600">11 млрд</div>
                      <p className="text-gray-600">сашинов (3,1% госбюджета)</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon name="Palette" size={20} />
                        Культурные учреждения
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm">
                        <li>• Театры</li>
                        <li>• Музеи</li>
                        <li>• Киноиндустрия</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      Праздники
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">День Независимости</h4>
                        <p className="text-sm text-gray-600">15 августа</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Праздник Колоса</h4>
                        <p className="text-sm text-gray-600">Национальный праздник урожая</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Rocket" size={20} />
                      Космическая программа
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Достижения</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Спутники: 20 единиц</li>
                          <li>• Космодром «Астория-1»</li>
                          <li>• Наблюдение и связь</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Бюджет</h4>
                        <p className="text-sm">
                          21,6 млрд сашинов<br/>
                          <span className="text-gray-600">(40% от бюджета науки и технологий)</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Globe" size={20} />
                      Международные отношения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-green-600">Союзники</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Кальвария</li>
                          <li>• Вестмарк</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">Напряжённые отношения</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Кусария</li>
                          <li>• Ортания</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-blue-600">Организации</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Совет наций</li>
                          <li>• Организация Объединённой Экологической Сети</li>
                          <li>• Всемирный Торговый Союз</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="AlertTriangle" size={20} />
                      Социальные проблемы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Недостаток квалифицированных кадров в IT</li>
                      <li>• Экологические последствия промышленности</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-600">
            <p>Портал Сашианийской Республики • Материал из Википедии — свободной энциклопедии</p>
            <p className="mt-2">
              Девиз: "Слава Республике, Слава Сашиании!" • 
              Интернет-домен: .sh • 
              Телефонный код: +47
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;