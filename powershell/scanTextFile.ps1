$directory = Read-Host "Enter the directory path to scan for text files"

if (-Not (Test-Path $directory)) {
    Write-Host "Directory does not exist. Please enter a valid path." -ForegroundColor Red
    exit
}

$txtFiles = Get-ChildItem -Path $directory -Filter "*.txt"

if ($txtFiles.Count -eq 0) {
    Write-Host "No text files found in the directory." -ForegroundColor Yellow
    exit
}

Write-Host "Text files found in $directory:" -ForegroundColor Cyan
for ($i = 0; $i -lt $txtFiles.Count; $i++) {
    Write-Host "$($i+1): $($txtFiles[$i].Name)"
}

$selection = Read-Host "Enter the number of the file you want to read"

if ($selection -match "^\d+$" -and $selection -ge 1 -and $selection -le $txtFiles.Count) {
    $selectedFile = $txtFiles[$selection - 1].FullName
    Write-Host "`nContents of $($txtFiles[$selection - 1].Name):" -ForegroundColor Green
    Get-Content $selectedFile
} else {
    Write-Host "Invalid selection. Please enter a valid number." -ForegroundColor Red
}