export default `; ModuleID = 'test.c'
target datalayout = "e-m:e-i64:64-f80:128-n8:16:32:64-S128"
target triple = "x86_64-unknown-linux-gnu"

%struct._IO_FILE = type { i32, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, i8*, %struct._IO_marker*, %struct._IO_FILE*, i32, i32, i64, i16, i8, [1 x i8], i8*, i64, i8*, i8*, i8*, i8*, i64, i32, [20 x i8] }
%struct._IO_marker = type { %struct._IO_marker*, %struct._IO_FILE*, i32 }
%struct.what = type { i8, i16 }

@.str = private unnamed_addr constant [6 x i8] c"foo()\00", align 1
@e_long = common global i64 0, align 8
@g_double = common global double 0.000000e+00, align 8
@.str.1 = private unnamed_addr constant [7 x i8] c"oooooh\00", align 1
@func_ptr = common global i32 (...)* null, align 8
@stderr = external global %struct._IO_FILE*, align 8

; Function Attrs: nounwind uwtable
define i32 @foo() #0 {
  %1 = call i32 @puts(i8* getelementptr inbounds ([6 x i8], [6 x i8]* @.str, i32 0, i32 0))
  ret i32 0
}

declare i32 @puts(i8*) #1

; Function Attrs: nounwind uwtable
define i32 @main(i32 %argc, i8** %argv) #0 {
  %1 = alloca i32, align 4
  %2 = alloca i32, align 4
  %3 = alloca i8**, align 8

; <label>:7                                       ; preds = %0
  %8 = getelementptr inbounds %struct.what, %struct.what* %X, i32 0, i32 0
  store i8 1, i8* %8, align 2
  store i8 49, i8* %b_char, align 1
  %9 = getelementptr inbounds %struct.what, %struct.what* %X, i32 0, i32 1
  store double 1.000000e+01, double* @g_double, align 8
  store i8* getelementptr inbounds ([7 x i8], [7 x i8]* @.str.1, i32 0, i32 0), i8** %cp_char_ptr, align 8
  store i32 (...)* bitcast (i32 ()* @foo to i32 (...)*), i32 (...)** @func_ptr, align 8
  %10 = call i32 @puts(i8* getelementptr inbounds ([8 x i8], [8 x i8]* @.str.2, i32 0, i32 0))
  store i32 10, i32* %1, align 4
  br label %66

; <label>:63                                      ; preds = %11
  %64 = load %struct._IO_FILE*, %struct._IO_FILE** @stderr, align 8
  %65 = call i32 @fputs(i8* getelementptr inbounds ([11 x i8], [11 x i8]* @.str.9, i32 0, i32 0), %struct._IO_FILE* %64)
  store i32 -1, i32* %1, align 4
  br label %66

; <label>:66                                      ; preds = %63, %46, %7
  %67 = load i32, i32* %1, align 4
  ret i32 %67
}

declare i32 @printf(i8*, ...) #1

declare i32 @fputs(i8*, %struct._IO_FILE*) #1

attributes #0 = { nounwind uwtable "disable-tail-calls"="false" "less-precise-fpmad"="false" "no-frame-pointer-elim"="true" "no-frame-pointer-elim-non-leaf" "no-infs-fp-math"="false" "no-nans-fp-math"="false" "stack-protector-buffer-size"="8" "target-cpu"="x86-64" "target-features"="+fxsr,+mmx,+sse,+sse2" "unsafe-fp-math"="false" "use-soft-float"="false" }

!llvm.ident = !{!0}

!0 = !{!"clang version 3.8.0 (tags/RELEASE_380/final)"}`;
