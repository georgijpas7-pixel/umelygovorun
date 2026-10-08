$srcDir = 'C:\Users\legen\Downloads\Telegram Desktop'
$dstDir = 'D:\ПРОЕКТЫ ПРОГРАММ\Умелый говорун\project\public'

$files = @(
    @{src='photo_2026-06-20_14-06-29.jpg'; dst='carousel-5.jpg'},
    @{src='photo_2026-06-20_14-06-59.jpg'; dst='carousel-6.jpg'},
    @{src='photo_2026-06-30_19-41-01.jpg'; dst='carousel-7.jpg'},
    @{src='photo_2026-10-03_14-21-28.jpg'; dst='carousel-8.jpg'},
    @{src='??? (1).jpg'; dst='carousel-9.jpg'},
    @{src='??? (2).jpg'; dst='carousel-10.jpg'},
    @{src='??? (3).jpg'; dst='carousel-11.jpg'},
    @{src='??? (4).jpg'; dst='carousel-12.jpg'},
    @{src='??? (5).jpg'; dst='carousel-13.jpg'},
    @{src='??? (6).jpg'; dst='carousel-14.jpg'},
    @{src='??? (7).jpg'; dst='carousel-15.jpg'},
    @{src='??? (7).jpg'; dst='carousel-16.jpg'},
    @{src='??? (8).jpg'; dst='carousel-17.jpg'},
    @{src='??? (8).jpg'; dst='carousel-18.jpg'},
    @{src='??? (9).jpg'; dst='carousel-19.jpg'},
    @{src='??? (10).jpg'; dst='carousel-20.jpg'},
    @{src='??? (11).jpg'; dst='carousel-21.jpg'},
    @{src='??? (11).jpg'; dst='carousel-22.jpg'},
    @{src='??? (12).jpg'; dst='carousel-23.jpg'},
    @{src='??? (13).jpg'; dst='carousel-24.jpg'}
}

$srcDir = 'C:\Users\legen\Downloads\Telegram Desktop'
$dstDir = 'D:\ПРОЕКТЫ ПРОГРАММ\Умелый говорун\project\public'

foreach ($item in $files) {
    $srcPath = Join-Path 'C:\Users\legen\Downloads\Telegram Desktop' $item.src
    $dstPath = Join-Path 'D:\ПРОЕКТЫ ПРОГРАММ\Умелый говорун\project\public' $item.dst
    if (Test-Path $srcPath) {
        Copy-Item -Path $srcPath -Destination $dstPath -Force
        Write-Host "Copied: $($item.src) -> $($item.dst)"
    } else {
        Write-Host "NOT FOUND: $($item.src)"
    }
}
Write-Host "Done!"