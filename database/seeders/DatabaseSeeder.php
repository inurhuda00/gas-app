<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Section;
use App\Models\Site;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $site = Site::create([
            'title' => "GAS",
            'description' => "aplikasi untuk memudahkan pelaku usaha menjangkau calon pembeli lebih luas",
        ]);

        collect([
            [
                "order" => 1,
                "name" => "Hero Section",
                "section" => "Hero",
                "props" => [
                    "title" => "Bergabung Dengan Gas",
                    "subtitle" => "Aplikasi Gas akan membantumu dalam memantau stock produk tokomu dan menjangkau customer yang lebih luas"
                ]
            ],
            [
                "order" => 2,
                "name" => "Categories Section",
                "section" => "Categories",
                "props" => [
                    "title" => "Kategori Toko",
                    "subtitle" => "Apapun jenis tokomu dapat bergabung bersama GAS",
                    "categories" => [
                        [
                            "name" => "Toko Kelontong",
                            "href" => "#"
                        ],
                        [
                            "name" => "Toko Bangunan",
                            "href" => "#"
                        ],
                        [
                            "name" => "Toko Pakaian",
                            "href" => "#"
                        ],
                        [
                            "name" => "Warung Makan",
                            "href" => "#"
                        ]
                    ]
                ]
            ],
            [
                "order" => 3,
                "name" => "Feature Section",
                "section" => "Feature",
                "props" => [
                    "title" => "Fitur Popular",
                    "subtitle" => " Nikmati berbagai fitur menarik yang kami berikan",
                    "features" => [
                        [
                            "name" => "Mesin Kasir",
                            "href" => "#"
                        ],
                        [
                            "name" => "Scan Barcode",
                            "href" => "#"
                        ],
                        [
                            "name" => "Daftar Kurir",
                            "href" => "#"
                        ],
                        [
                            "name" => "Stock Opname",
                            "href" => "#"
                        ],
                        [
                            "name" => "Print Thermal",
                            "href" => "#"
                        ]
                    ]
                ]
            ],
            [
                "order" => 4,
                "name" => "FeatureMap Section",
                "section" => "FeatureMap",
                "props" => [
                    "title" => "Fitur Maps",
                    "subtitle" => "Aplikasi Gas akan membantumu dalam memantau stock produk tokomu dan menjangkau customer yang lebih luas"
                ]
            ],
            [
                "order" => 5,
                "name" => "CTA Section",
                "section" => "CTA",
                "props" => [
                    "title" => " Daftarkan Tokomu Segera"
                ]
            ],
            [
                "order" => 6,
                "name" => "CTA Section",
                "section" => "CTA",
                "props" => [
                    "title" => "Download Sekarang",
                    "reverse" => true
                ]
            ],
            [
                "id" => 7,
                "order" => 7,
                "name" => "Career Section",
                "section" => "Career",
                "props" => [
                    "title" => "Temukan Karir Impianmu",
                    "subtitle" => "Mari bergabung bersama kami. <br /> Jadilah bagian dari kami dan kembangkan bakat, ide kreatifmu dalam GAS",
                    "careers" => [
                        [
                            "name" => "Marketing Comunication",
                            "description" => "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama"
                        ],
                        [
                            "name" => "Marketing Comunication",
                            "description" => "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama"
                        ],
                        [
                            "name" => "Marketing Comunication",
                            "description" => "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama"
                        ],
                        [
                            "name" => "Marketing Comunication",
                            "description" => "Ayo nikmati beragam fitur yang dapat memberikan kemudahaan untuk tokomu dan mulai mengembangkan bisnis toko online berama"
                        ]
                    ]
                ]
            ],
            [
                "id" => 8,
                "order" => 8,
                "name" => "About Section",
                "section" => "About",
                "props" => [
                    "title" => "Tentang Kami",
                    "subtitle" => "GAS adalah aplikasi untuk memudahkan pelaku udaha menjangkau calon pembeli lebih luas melalui gerakan #AyoBelanjaTokoTetangga <br /> GAS mengajak untuk menjelajah dan mendukung usaha-usaha di sekitarmu."
                ]
            ]
        ])->each(fn ($category) => Site::find($site->id)->sections()->create($category));
    }
}
