New-Item -ItemType Directory -Force -Path 'src\assets\Battery Partners' | Out-Null
New-Item -ItemType Directory -Force -Path 'src\assets\Inverters' | Out-Null
New-Item -ItemType Directory -Force -Path 'src\assets\Panel' | Out-Null

$client = New-Object System.Net.WebClient
$client.Headers['User-Agent'] = 'Mozilla/5.0'

function DL($url, $out) {
  try {
    $client.DownloadFile($url, (Join-Path (Get-Location) $out))
    Write-Host "OK  $out"
  } catch {
    Write-Host "FAIL $out"
  }
}

DL 'https://aussiesunsolar.com.au/assets/1-DmTgDFDn.webp' 'src\assets\Battery Partners\1.webp'
DL 'https://aussiesunsolar.com.au/assets/2-CXem9Yxl.webp' 'src\assets\Battery Partners\2.webp'
DL 'https://aussiesunsolar.com.au/assets/3-CmXQfuWA.webp' 'src\assets\Battery Partners\3.webp'
DL 'https://aussiesunsolar.com.au/assets/4-elG5S9yb.webp' 'src\assets\Battery Partners\4.webp'
DL 'https://aussiesunsolar.com.au/assets/5-BRMQ9LWW.webp' 'src\assets\Battery Partners\5.webp'
DL 'https://aussiesunsolar.com.au/assets/1-BAsSK5mG.webp' 'src\assets\Inverters\1.webp'
DL 'https://aussiesunsolar.com.au/assets/2-DW0g3Miv.webp' 'src\assets\Inverters\2.webp'
DL 'https://aussiesunsolar.com.au/assets/3-BuflBfF2.webp' 'src\assets\Inverters\3.webp'
DL 'https://aussiesunsolar.com.au/assets/4-yqqSgsOo.webp' 'src\assets\Inverters\4.webp'
DL 'https://aussiesunsolar.com.au/assets/2-CXem9Yxl.webp' 'src\assets\Inverters\5.webp'
DL 'https://aussiesunsolar.com.au/assets/1-Dyx6Jca0.webp' 'src\assets\Panel\1.webp'
DL 'https://aussiesunsolar.com.au/assets/2-C2H-vvzw.webp'  'src\assets\Panel\2.webp'
DL 'https://aussiesunsolar.com.au/assets/3-B2MDO0Xs.webp' 'src\assets\Panel\3.webp'
DL 'https://aussiesunsolar.com.au/assets/4-XCLxDVZG.webp' 'src\assets\Panel\4.webp'
DL 'https://aussiesunsolar.com.au/assets/5-D8eWF3Rx.webp' 'src\assets\Panel\5.webp'
