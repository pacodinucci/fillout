$directory = Read-Host "Enter the directory path"

if (-Not (Test-Path $directory)) {
    New-Item -ItemType Directory -Path $directory | Out-Null
    Write-Host "Directory created: $directory" -ForegroundColor Green
} else {
    Write-Host "Directory already exists: $directory" -ForegroundColor Yellow
}

$fileNames = @("file1.txt", "file2.txt", "file3.txt")

foreach ($file in $fileNames) {
    $filePath = Join-Path -Path $directory -ChildPath $file
    "Sample content for $file" | Out-File -FilePath $filePath -Encoding UTF8
    Write-Host "Created file: $filePath" -ForegroundColor Cyan
}

Write-Host "`nFiles in $directory:" -ForegroundColor Magenta
Get-ChildItem -Path $directory | ForEach-Object {
    Write-Host "$($_.Name) - Size: $($_.Length) bytes"
}

$fileToDelete = Read-Host "`nEnter the name of the file to delete"

$fileToDeletePath = Join-Path -Path $directory -ChildPath $fileToDelete

if (Test-Path $fileToDeletePath) {
    Remove-Item -Path $fileToDeletePath -Force
    Write-Host "Deleted file: $fileToDelete" -ForegroundColor Red
} else {
    Write-Host "File not found: $fileToDelete" -ForegroundColor Yellow
}
