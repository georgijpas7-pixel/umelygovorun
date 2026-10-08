$src = 'C:\Users\legen\Downloads\Telegram Desktop'
$dst = 'D:\ПРОЕКТЫ ПРОГРАММ\Умелый говорун\project\public'
$files = Get-ChildItem $src -Filter '*.jpg' | Sort-Object Name
$i = 5
foreach ($f in $files) {
    $newName = 'carousel-' + $i + $f.Extension
    Copy-Item $f.FullName -Destination (Join-Path $dst ('carousel-' + $i + $f.Extension)) -Force
    Write-Host "Copied: $($f.Name) -> carousel-$i.jpg"
    $i++
}
Write-Host "Done!"